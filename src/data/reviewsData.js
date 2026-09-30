// Add manually approved customer reviews here.
// Each review object follows this shape:
// {
//   id: "rev-1",
//   name: "Customer Name",
//   location: "Bengaluru, Karnataka",
//   rating: 5,                          // 1–5
//   date: "September 2026",
//   product: "Product Name",            // optional
//   comment: "Review text here.",
//   verified: true                      // true = show "Verified Order" badge
// }

export const DEFAULT_REVIEWS = [
	{
		id: "rev-suchithra-n-s",
		name: "Suchithra N S",
		location: "Nadipinayakahalli",
		rating: 5,
		date: "September 2026",
		product: "Puliogare Gojju • Moringa Chutney Pudi • Shankara Poli",
		comment: "The Puliogare Gojju was very nice and tasted really good. It was my first time trying the Moringa Chutney Pudi, and the taste was authentic and flavourful. The Shankara Poli was also good and spicy, and it came just as I expected.",
		verified: false,
		status: "approved"
	},
	{
		id: "rev-muniraju-nemmadi-studio",
		name: "Muniraju (Nemmadi Studio)",
		location: "Jangamakote Cross",
		rating: 5,
		date: "September 2026",
		product: "Puliogare",
		comment: "ಪುಳಿಯೋಗರೆ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು. ಮನೆಯವರೆಲ್ಲರೂ ತುಂಬಾ ಇಷ್ಟಪಟ್ಟರು. ನಿಮ್ಮ ಕುಟುಂಬದ ಎಲ್ಲರಿಗೂ ಧನ್ಯವಾದಗಳು.",
		verified: false,
		status: "approved"
	}
];
