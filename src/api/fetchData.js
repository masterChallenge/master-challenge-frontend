const getAllChallenges = async () => {
  const response = await fetch(`https://master-challenge.vercel.app/api/challenges`, { mode: 'no-cors'})
  const json = await response.json()
  return json;
}

export { getAllChallenges }