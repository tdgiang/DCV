const API_KEY = "a4d3c60648ca4f03a3875f8ca4cb3aec";

export async function getNews(page = 1, pageSize = 10) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    return jsonData.articles || [];
  } catch (error) {
    return [];
  }
}