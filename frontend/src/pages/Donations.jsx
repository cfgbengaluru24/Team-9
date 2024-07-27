// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid'; 
// // import donation from '../assets/4894738.jpg'
// // import './Donations.css';

// // const Donations = () => {
// //     const [donationAmount, setDonationAmount] = useState(0);
// //     const [name, setName] = useState('');
// //     const [panNumber, setPanNumber] = useState('');
// //     const [emailId, setEmailId] = useState('');
// //     const [donationId] = useState(uuidv4()); // Generate a unique UUID

// //     const handleDonationChange = (e) => {
// //         setDonationAmount(e.target.value);
// //     };

// //     const handleDonationSubmit = (e) => {
// //         e.preventDefault();
        
// //         // Make the API call 
// //         fetch('http://localhost:3000/api/v1/fundraizerRouter/donateFunds',{
// //            method: 'POST',
// //            headers: {
// //                'Content-Type': 'application/json',
// //            },
// //            body: JSON.stringify({
// //                name: name,
// //                email: emailId,
// //                pan_no: panNumber,
// //                transaction_id: donationId,
// //                amount: donationAmount,
// //            }),
// //         }) .then(response =>
// //             response.json()
// //         ).then(data => {
// //             console.log('Success:', data);
// //             alert('Thank you for your donation!');
// //             setDonationAmount(0);
// //             setName('');
// //             setPanNumber('');
// //             setEmailId('');
// //         })
// //         .catch((error) => {
// //             console.error('Error:', error);
// //             alert('Failed to make the API call. Please try again later.');
// //         });
// //     };

// //     return (
// //         <div className="container mx-auto p-6 image">
// //             <h1 className="text-3xl font-bold mb-6 text-center">Donate for Dental Hygiene of Young Children</h1>
// //             <form onSubmit={handleDonationSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
// //                 <div className="mb-4">
// //                     <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
// //                         Name (Optional)
// //                     </label>
// //                     <input
// //                         type="text"
// //                         id="name"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label htmlFor="panNumber" className="block text-gray-700 font-bold mb-2">
// //                         PAN Number
// //                     </label>
// //                     <input
// //                         type="text"
// //                         id="panNumber"
// //                         value={panNumber}
// //                         onChange={(e) => setPanNumber(e.target.value)}
// //                         required
// //                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label htmlFor="emailId" className="block text-gray-700 font-bold mb-2">
// //                         Email ID
// //                     </label>
// //                     <input
// //                         type="email"
// //                         id="emailId"
// //                         value={emailId}
// //                         onChange={(e) => setEmailId(e.target.value)}
// //                         required
// //                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     />
// //                 </div>
// //                 <div className="mb-4">
// //                     <label htmlFor="donationAmount" className="block text-gray-700 font-bold mb-2">
// //                         Donation Amount
// //                     </label>
// //                     <input
// //                         type="number"
// //                         id="donationAmount"
// //                         value={donationAmount}
// //                         onChange={handleDonationChange}
// //                         required
// //                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     />
// //                 </div>
// //                 <button
// //                     type="submit"
// //                     className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
// //                 >
// //                     Donate
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Donations;
// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; 
// import donation from '../assets/4894738.jpg'
// import './Donations.css';

// const Donations = () => {
//     const [donationAmount, setDonationAmount] = useState(0);
//     const [name, setName] = useState('');
//     const [panNumber, setPanNumber] = useState('');
//     const [emailId, setEmailId] = useState('');
//     const [donationId] = useState(uuidv4()); // Generate a unique UUID

//     const handleDonationChange = (e) => {
//         setDonationAmount(e.target.value);
//     };

//     const handleDonationSubmit = (e) => {
//         e.preventDefault();
        
//         // Make the API call 
//         fetch('http://localhost:3000/api/v1/fundraizerRouter/donateFunds',{
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json',
//            },
//            body: JSON.stringify({
//                name: name,
//                email: emailId,
//                pan_no: panNumber,
//                transaction_id: donationId,
//                amount: donationAmount,
//            }),
//         }) .then(response =>
//             response.json()
//         ).then(data => {
//             console.log('Success:', data);
//             alert('Thank you for your donation!');
//             setDonationAmount(0);
//             setName('');
//             setPanNumber('');
//             setEmailId('');
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             alert('Failed to make the API call. Please try again later.');
//         });
//     };

//     return (
//         <div className="container">
//             <h1 className="heading">Donate for Dental Hygiene of Young Children</h1>
//             <form onSubmit={handleDonationSubmit} className="form">
//                 <div className="form-group">
//                     <label htmlFor="name" className="label">
//                         Name (Optional)
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="input"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="panNumber" className="label">
//                         PAN Number
//                     </label>
//                     <input
//                         type="text"
//                         id="panNumber"
//                         value={panNumber}
//                         onChange={(e) => setPanNumber(e.target.value)}
//                         required
//                         className="input"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="emailId" className="label">
//                         Email ID
//                     </label>
//                     <input
//                         type="email"
//                         id="emailId"
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         required
//                         className="input"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="donationAmount" className="label">
//                         Donation Amount
//                     </label>
//                     <input
//                         type="number"
//                         id="donationAmount"
//                         value={donationAmount}
//                         onChange={handleDonationChange}
//                         required
//                         className="input"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="button"
//                 >
//                     Donate
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Donations;
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import donation from '../assets/4894738.jpg';
import './Donations.css';

const Donations = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const [name, setName] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [donationId] = useState(uuidv4()); // Generate a unique UUID

    const handleDonationChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        
        // Make the API call 
        fetch('http://localhost:3000/api/v1/fundraizerRouter/donateFunds',{
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               name: name,
               email: emailId,
               pan_no: panNumber,
               transaction_id: donationId,
               amount: donationAmount,
           }),
        }) .then(response =>
            response.json()
        ).then(data => {
            console.log('Success:', data);
            alert('Thank you for your donation!');
            setDonationAmount(0);
            setName('');
            setPanNumber('');
            setEmailId('');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to make the API call. Please try again later.');
        });
    };

    return (
        <div className="grid-container">
            <div className="image-container">
                <img src={donation} alt="Donation" className="donation-image" />
            </div>
            <div className="form-container">
                <h1 className="heading">Donate for Dental Hygiene of Young Children</h1>
                <form onSubmit={handleDonationSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="name" className="label">
                            Name (Optional)
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="panNumber" className="label">
                            PAN Number
                        </label>
                        <input
                            type="text"
                            id="panNumber"
                            value={panNumber}
                            onChange={(e) => setPanNumber(e.target.value)}
                            required
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailId" className="label">
                            Email ID
                        </label>
                        <input
                            type="email"
                            id="emailId"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            required
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="donationAmount" className="label">
                            Donation Amount
                        </label>
                        <input
                            type="number"
                            id="donationAmount"
                            value={donationAmount}
                            onChange={handleDonationChange}
                            required
                            className="input"
                        />
                    </div>
                    <button
                        type="submit"
                        className="button"
                    >
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donations;
