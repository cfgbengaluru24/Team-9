import React, { useState } from 'react';
import './ReportForm.css'; // Import the custom CSS file

const ReportForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        reportText: '',
        createdAt: '',
        diagnostics: '',
        prescription: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        console.log(formData)
        try {
            const response = await fetch('http://localhost:3000/api/v1/reports/putReport', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Report submitted successfully!');
                setFormData({
                    userSEmail: '',
                    reportText: '',
                    createdAt: '',
                    diagnostics: '',
                    prescription: ''
                });
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('An error occurred while submitting the report');
        }
    };

    return (
        <div className="report-form-container">
            <h2 className="form-title">Submit Report</h2>
            {error && <div className="form-message error-message">{error}</div>}
            {success && <div className="form-message success-message">{success}</div>}
            <form onSubmit={handleSubmit} className="report-form">
                <div className="form-group">
                    <label htmlFor="userId" className="form-label">User Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.userId}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reportText" className="form-label">Report Text</label>
                    <textarea
                        id="reportText"
                        name="reportText"
                        value={formData.reportText}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="createdAt" className="form-label">Created At</label>
                    <input
                        type="date"
                        id="createdAt"
                        name="createdAt"
                        value={formData.createdAt}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="diagnostics" className="form-label">Diagnostics</label>
                    <input
                        type="text"
                        id="diagnostics"
                        name="diagnostics"
                        value={formData.diagnostics}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prescription" className="form-label">Prescription</label>
                    <input
                        type="text"
                        id="prescription"
                        name="prescription"
                        value={formData.prescription}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <button
                    type="submit"
                    className="form-button"
                >
                    Submit Report
                </button>
            </form>
        </div>
    );
};

export default ReportForm;
