import axios from "axios"

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getUsers = query => {
  return axios.get(`${GET_USERS_URL}?${query}`).then(d => d.data)
}

const getUserById = id => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then(response => response.data)
    .then(response => response.data)
}

const createUser = user => {
  return axios
    .put(USER_URL, user)
    .then(response => response.data)
    .then(response => response.data)
}

const updateUser = user => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then(response => response.data)
    .then(response => response.data)
}

const deleteUser = userId => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = userIds => {
  const requests = userIds.map(id => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser
}
