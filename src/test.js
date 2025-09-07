// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Rsvp.css';
// import Counter from './Counter';
// import BackButton from './BackButton';

// const Rsvp = () => {
//   const [attendance, setAttendance] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     adults: 1,
//     kids: 0,
//     comments: '',
//     noMessage: '' // Used for "No" response
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false); // To disable button on submit
//   const navigate = useNavigate();

//   // No changes needed for handleInputChange or handleCounterChange



//   return (
//     <main className="rsvp-main">
//       <BackButton />
//       <form className="card rsvp-form" onSubmit={handleSubmit}>
//         {/* ... form content ... */}
        
//         {/* Update the submit button to show a loading state */}
//         {attendance && (
//           <button type="submit" className="submit-button" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit Response'}
//           </button>
//         )}
//       </form>
//     </main>
//   );
// };

// export default Rsvp;