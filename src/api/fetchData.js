const API = `https://rrmx-polka.herokuapp.com`

const getAllChallenges = async () => {
  const response = await fetch(`${API}/challenges`)
  const json = await response.json()
  return json;
}

const getChallenge = async (id) => {
  const response = await fetch(`${API}/challenges/${id}`)
  const json = await response.json()
  return json;
}

export { 
  getAllChallenges,
  getChallenge
}