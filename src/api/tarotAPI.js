export const TarotReading = async () => {

const api_key=  import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_AUTH_TOKEN;

  const form = new FormData();
  form.append("api_key", api_key );
  form.append("lan", "en");

  try {
    const response = await fetch('https://astroapi-5.divineapi.com/api/v2/daily-tarot', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
		,
      },
      body: form,
    });

    const result = await response.json();
    console.log(result);

  } catch (error) {
    console.error("Fetch error:", error);
  }
}
