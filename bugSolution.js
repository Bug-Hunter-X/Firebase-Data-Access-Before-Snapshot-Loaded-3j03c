The solution involves using promises or async/await to ensure the data is loaded before accessing it. Here's how:

// Using .then()
db.collection('yourCollection').doc('yourDoc').get().then((docSnapshot) => {
  if (docSnapshot.exists()) {
    console.log('Data:', docSnapshot.data());
  } else {
    console.log('Document does not exist!');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});

//Using async/await
async function getData(){
  try {
    const docSnapshot = await db.collection('yourCollection').doc('yourDoc').get();
    if (docSnapshot.exists()) {
      console.log('Data:', docSnapshot.data());
    } else {
      console.log('Document does not exist!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
 getData();