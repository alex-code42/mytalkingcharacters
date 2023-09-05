import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const review = await Review.findById(id);

    if (!review) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(review);
  }
  if (request.method === "DELETE") {
    const reviewToDelete = await Review.findByIdAndDelete(id);
    // Declare jokeToDelete to be the joke identified by its id and delete it.
    // This line handles the entire deletion process.
    response.status(200).json(reviewToDelete);
  }
}