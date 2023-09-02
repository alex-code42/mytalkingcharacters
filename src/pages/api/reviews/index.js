import Review from "@/db/models/Review";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const reviews = await Review.find();
    // console.log("Characters auf in API",characters);
    return response.status(200).json(reviews);
  }

  if (request.method === "POST") {
    try {
      const reviewData = request.body;
      // We're declaring jokeData to contain the body of our request sent by our form that we haven't created yet.
      // The body of our request might contain data in a variety of formats, but is typically an object.
      const review = new Review(reviewData);
      // Utilizing our Joke scheme, we're creating a new joke.
      // At this point we're sanitizing our data according to the schema of our Joke model.
      await review.save();
      // We've created a new joke, now we're calling save() to have mongoose insert a new document into our database.
  
      // The three lines above are functionally the same as:
      // Joke.create(request.body)
      // It's just a somewhat less opaque way.
  
      response.status(201).json({ status: "Review created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}

