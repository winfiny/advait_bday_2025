import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rsvp.css';
import Counter from './Counter';
import BackButton from './Backbutton';
import Activities from './Activities'; // Import the new BackButton component

const Rsvp = () => {
  const [attendance, setAttendance] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    adults: 1,
    kids: 0,
    comments: '',
    noMessage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button on submit
  const [phoneError, setPhoneError] = useState(''); // --- NEW state for the error message ---
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // This will remove any character that is not a digit
      const numericValue = value.replace(/[^0-9()+-]/g, '');
      setFormData(prevState => ({ ...prevState, [name]: numericValue }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleCounterChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // --- UPDATED handleSubmit FUNCTION ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Validation Logic ---
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return; // Stop the submission
    }
    
    setPhoneError(''); // Clear error if validation passes
    setIsSubmitting(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyH0r6gLbkdkjxyYUG5L7fwnpnVftoimtcCEBQ1iP4n7ICpNNfJXgiiH6ay6VUwN2flBw/exec"; // ⚠️ Paste the URL you copied

    // Create a FormData object to send the data
    const submissionData = new FormData();
    submissionData.append('attendance', attendance);
    
    // Conditionally append data based on attendance
    if (attendance === 'yes' || attendance === 'maybe') {
      submissionData.append('name', formData.name);
      submissionData.append('phone', formData.phone);
      submissionData.append('adults', formData.adults);
      submissionData.append('kids', formData.kids);
      submissionData.append('comments', formData.comments);
    } else { // 'no'
      submissionData.append('name', formData.name);
      submissionData.append('phone', formData.phone);
      submissionData.append('comments', formData.noMessage);
    }

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: submissionData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // alert('Thank you for your response!');
      navigate('/thank-you'); 
    })
    .catch((error) => {
      console.error('Error:', error);
     // alert('There was an error submitting your response. Please try again.');
      setIsSubmitting(false); // Re-enable button on error
    });
  };
  return (
    <main className="rsvp-main">
      {/* --- ADD THE BACK BUTTON HERE --- */}
      <BackButton />

      <form className="card rsvp-form" onSubmit={handleSubmit}>
        <h2>Kindly Let Us Know!</h2>

        <fieldset className="attendance-group">
          {/* ... rest of the form is unchanged ... */}
          <legend>Will you be able to join the hoedown?</legend>
          <label>
            <input type="radio" value="yes" checked={attendance === 'yes'} onChange={(e) => setAttendance(e.target.value)} />
            Yes, we'll be there!
          </label>
          <label>
            <input type="radio" value="maybe" checked={attendance === 'maybe'} onChange={(e) => setAttendance(e.target.value)} />
            Maybe, we'll try our best!
          </label>
          <label>
            <input type="radio" value="no" checked={attendance === 'no'} onChange={(e) => setAttendance(e.target.value)} />
            Sorry, we can't make it.
          </label>
        </fieldset>
        
        {(attendance === 'yes' || attendance === 'maybe') && (
          <div className="form-fields">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
            {phoneError && <p className="error-message">{phoneError}</p>}
            
            <div className="guest-count">
              <Counter 
                label="Number of Adults"
                value={formData.adults}
                onIncrement={() => handleCounterChange('adults', formData.adults + 1)}
                onDecrement={() => handleCounterChange('adults', Math.max(1, formData.adults - 1))}
              />
              <Counter 
                label="Number of Kids"
                value={formData.kids}
                onIncrement={() => handleCounterChange('kids', formData.kids + 1)}
                onDecrement={() => handleCounterChange('kids', Math.max(0, formData.kids - 1))}
              />
            </div>

            <label>Any other comments? (optional)</label>
            <textarea name="comments" value={formData.comments} onChange={handleInputChange}></textarea>
          </div>
        )}

        {attendance === 'no' && (
          <div className="form-fields">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

            <label>Leave a message? (optional)</label>
            <textarea name="comments" value={formData.comments} onChange={handleInputChange}></textarea>
          </div>
        )}

        {attendance && (
          <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? <div className="spinner"></div> : 'Submit Response'}
        </button>
        )}
      </form>
      {/* <Activities /> */}
    </main>
  );
};

export default Rsvp;
