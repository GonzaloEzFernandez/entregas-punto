import { db } from "../firebase.js";

export const getData = async (req, res) => {
  const { trackingNumber } = req.query;

  if (!trackingNumber) {
    return res.status(400).send("trackingNumber parameter is required");
  }

  try {
    // Consultamos la colección `packages` buscando el documento que coincida con el `trackingNumber` proporcionado
    const packagesSnapshot = await db
      .collection("packages")
      .where("trackingNumber", "==", trackingNumber)
      .get();

    // Verificamos si no se encontró ningún documento que coincida
    if (packagesSnapshot.empty) {
      return res.status(404).send("Tracking number not found");
    }

    let eventsArray = [];

    // Iteramos sobre los documentos encontrados
    packagesSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.events && Array.isArray(data.events)) {
        eventsArray = eventsArray.concat(
          data.events.map((event) => ({
            date: event.date,
            info: event.info,
          }))
        );
      }
    });

    // Enviamos la respuesta al cliente
    res.json(eventsArray);
  } catch (error) {
    console.error("Error getting document: ", error);
    res.status(500).send("Internal Server Error");
  }
};

/* let packageData = null;

    packegesSnapshot.forEach(doc => {
      packageData = doc.data();
    });

    // Assuming `users` collection has related data with a matching user ID from packageData
    const userId = packageData.userId; // Adjust field name as necessary
    const userDoc = await db.collection("users").doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send("User not found");
    }

    const userData = userDoc.data();

    const result = {
      userId: userId,
      user: userData,
      package: packageData,
    };

    res.json(result);

  } catch (error) {
    console.error("Error getting document: ", error);
    res.status(500).send("Internal Server Error");
  }
}; */

/* try {
    const packagesRef = db.collection("packages");
    const snapshot = await packagesRef.where("trackingNumber", "==", trackingNumber).get();

    if (snapshot.empty) {
      return res.status(404).send("No matching documents.");
    }

    let data;
    snapshot.forEach(doc => {
      data = doc.data();
    });

    const { date, description } = data;
    res.json({ date, description });
  } catch (error) {
    console.error("Error getting documents: ", error);
    res.status(500).send("Error retrieving data");
  } */
