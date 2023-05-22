import { connectDatabase, insertDocument } from "@/helpers/db-util";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const newReservation = req.body.reservationDetails;

    // Perform some server side validation. Important as client side can easily be circumvented.
    // Do a more thorough validation below

    if (!newReservation) {
      res.status(422).json({ message: "Invalid user input!" });
      client.close();
      return;
    }

    let result;

    try {
      result = await insertDocument(
        client,
        "reservations",
        "all-reservations",
        newReservation
      );
      newReservation._id = result.insertedId;
      res.status(201).json({
        message: "Successfully reserved a table!",
        reservation: newReservation,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Inserting reservation to the database failed!" });
    }
  }

  client.close();
};

export default handler;
