export default async function handler(req, res) {
  try {
    const data = JSON.parse(req.body);

    const { id, likes, visits } = data;

    const mutations = {
      mutations: [
        {
          patch: {
            id: id,
            set: { likes: likes, visits: visits },
          },
        },
      ],
    };

    const apiEndPoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-12-05/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

    const result = await fetch(apiEndPoint, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      },
      body: JSON.stringify(mutations),
      method: "POST",
    });

    await result.json();

    res.status(200).json({ message: "Added!" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
