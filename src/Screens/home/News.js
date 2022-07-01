
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { uniqBy } from "lodash";
import { getNews } from "./apis";
import Article from "./Article";
import Header from "../../components/Header/Header";
import R from "../../assets/R";

const PAGE_SIZE = 20;
const PRIMARY_COLOR = R.colors.main;

export default () => {
    const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const hasMoreData = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!hasMoreData.current) return;

      const newArticles = await getNews(page, PAGE_SIZE);

      if (newArticles.length < PAGE_SIZE) {
        hasMoreData.current = false;
      }

      setArticles((articles) => {
        // Combine and filter article has no image
        const allArticles = articles.concat(
          newArticles.filter((article) => article.urlToImage)
        );

        // Remove duplicate articles
        // https://lodash.com/docs/4.17.15#uniqBy
        return uniqBy(allArticles, "url");
      });
      setLoading(false);
      setRefreshing(false);
    };

    fetchData();
  }, [page]);
  const refreshData = () => {
    setPage(1);
    setRefreshing(true);
    setArticles([]);
    hasMoreData.current = true;
  };

  const renderArticle = ({ item }) => <Article item={item} />;
  const renderDivider = () => <View style={styles.articleSeparator}></View>;
  const renderFooter = () => (
    <View style={styles.center}>
      {hasMoreData.current && <ActivityIndicator color={PRIMARY_COLOR} />}
    </View>
  );
  const keyExtractor = (item) => item.url;

  return (
    <View style={styles.container}>
        <Header title="Tin tức" isBack={true} />
      <View style={styles.content}>

        {isLoading ? (
          <View style={styles.center}>
            {/* https://reactnative.dev/docs/activityindicator */}
            <ActivityIndicator size="large" color={PRIMARY_COLOR} />
          </View>
        ) : (
          // Optimizing FlatList: https://reactnative.dev/docs/optimizing-flatlist-configuration
          <FlatList
            data={articles}
            renderItem={renderArticle}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderDivider}
            ListFooterComponent={renderFooter}
            initialNumToRender={6}
            onEndReached={() => setPage((page) => page + 1)}
            onEndReachedThreshold={1}
            onRefresh={refreshData}
            refreshing={refreshing}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      padding: 15,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headlines: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 50,
      color: PRIMARY_COLOR,
    },
    articleSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: PRIMARY_COLOR,
    },
  });