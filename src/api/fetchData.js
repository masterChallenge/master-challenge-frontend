const getAllChallenges = async () => {
  const response = await fetch(`https://master-challenge.vercel.app/api/challenges`)
  const json = await response.json()
  return json;
}

const getChallenge = async (id) => {
  const response = await fetch(`https://master-challenge.vercel.app/api/challenge/${id}`)
  const json = await response.json()
  console.log(json)
  return json;
}

export { 
  getAllChallenges,
  getChallenge
}