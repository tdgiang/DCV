import { PostData, PostLogin, PutData, GetData } from "./helpers";
import url from "./url";

export const GetUser = async (params) => 
    GetData(url.urlProfile, params)
        .then((res) => res)
        .catch((err) => err)

export const LoginApi = async (body) => 
    GetData(url.urllogin, body)
        .then((res) => res)
        .catch((err) => err)

export const EditUser = async (body) => 
    PutData(url.urlEditProfile, body)
        .then((res) => res)
        .catch((err) => err)

// export const ListUserApi = async (params) =>
// PostData(url.urlUserList, params)
//     .then((res) => res)
//     .catch((err) => err);

// export const LoginApi = async (body) => 
// PostLogin(url.urllogin, body)
//     .then((res) => res)
//     .catch((err) => err);

// export const createUserApi = async (params) => 
// PostData(url.urlCreateUser, params)
//     .then((res) => res)
//     .catch((err) => err);

// export const DeleteUserApi = async (params) => 
// PostData(url.urlDeleteUser, params)
//     .then((res) => res)
//     .catch((err) => err);

// export const UpdateUserApi = async (params) => 
// PostData(url.urlUpdateUser, params)
//     .then((res) => res)
//     .catch((err) => err);
