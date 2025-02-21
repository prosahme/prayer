const prayerTimes = {
    Fajr: "05:30 AM",
    Dhuhr: "12:45 PM",
    Asr: "04:00 PM",
    Maghrib: "06:15 PM",
    Isha: "08:00 PM"
};
const prayerList =
document.getElementById('prayerList');
for(let prayer in prayerTimes) {
    let li = document.createElement('li');
    li.textContent = `${prayer}: ${prayerTimes[prayer]}`;
    prayerList.appendChild(li);
}
const azkarData = {
    morning:{
        Text: "Recite Ayat-ul-Kursi and Surah Al-Ikhlas 3 times.",
        image: "mooo.jpg"
    },
    evening:{
          Text: "Recite Surah Al-Falaq and Surah An-Nas 3 times.",
          image: "mo6.jpg"
    }
};

  function updateAzkar() {
    let now = new Date();
    let hours = now.getHours();
    let azkarImage = 
    document.getElementById('azkarImage');
    let azkarText =
    document.getElementById('azkarText');

  if(hours >= 5 && hours < 18){
        azkarImage.src = azkarData.morning.image;
        azkarText.textContent = azkarData.morning.Text;
  } else{
    azkarImage.src = azkarData.evening.image;
       azkarText.textContent = azkarData.evening.Text;
  }
}

   updateAzkar();
   function showAzkarNotification() {
    if("Notification" in window){
        notification.requestPermission().then(Permission => {
             if(Permission === "granted"){
                new notification("AzkarReminder", {
                     body:
              document.getElementById('azkarText').textContent,
                     icon:
                     document.getElementById ('azkarImage').src 
                });
             }
        });
    }
   }
    setInterval(showAzkarNotification,6*60*60*1000);