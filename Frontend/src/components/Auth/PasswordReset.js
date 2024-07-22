import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../../services/auth";
import "./PasswordReset.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword(email);
      if (response.success) {
        setSuccess("Password reset link has been sent to your email");
        setEmail("");
        setError("");
        // Redirect to login after a delay
        setTimeout(() => history.push("/login"), 3000);
      } else {
        setError("Error sending password reset link");
      }
    } catch (err) {
      setError("Error resetting password");
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Password</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default PasswordReset;
