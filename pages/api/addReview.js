export default async function handler(req, res) {
  try {
    const reviewData = JSON.parse(req.body);

    const { serviceId, rating, reviewer, review } = reviewData;

    const mutations = {
      mutations: [
        {
          create: {
            _type: "review",
            name: reviewer,
            rating: rating,
            review: review,
            service: {
              _type: "reference",
              _ref: serviceId,
            },
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

    res.status(200).json({ message: "Review Added!" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
