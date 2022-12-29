async function getGamesList() {
  return await fetch(
    "https://api-brchallenges.vercel.app/api/blizzard/games"
  ).then((api) => api.json());
}

export default getGamesList;
