import { useState } from "react";
import style from "./PerInfo.module.css";
import pic from "../assets/pro.png";
import { PersonInfo } from "../store/SetupProfSlice";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const PerInfo = () => {
     const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    dob: "",
    city: "",
    country: "",
    profession: "",
    experience: "",
    skills: "",
    about: "",
    facebook: "",
    twitter: "",
  });

  const [avatar, setAvatar] = useState(pic);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setAvatar(imgUrl);
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // calculate age from dob
  let age = null;
  if (formData.dob) {
    const birthDate = new Date(formData.dob);
    const today = new Date();
    age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--; // adjust if birthday hasn’t happened yet this year
    }
  }

  const payload = {
    avatar,
    ...formData,
    age,
  };



  dispatch(PersonInfo(payload));
};


  return (
    <>
      <div className={style.formContainer}>
        {/* Profile Section */}
        <div className={style.profileSection}>
          <div className={style.avatar}>
          
              {/* clicking image triggers hidden input */}
              <label htmlFor="avatarInput">
                <img src={avatar} alt="Profile" style={{ cursor: "pointer" }} />
              </label>
              <input
                id="avatarInput"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}   // fully hidden, no space taken
              />
          

          </div>
          <div>
            <h3 className={style.name}>Adam Smith</h3>
            <p className={style.email}>Adamsmith@gmail.com</p>
          </div>
        </div>

        {/* Form Fields */}
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.grid}>
            <div className={style.formGroup}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className={style.formGroup}>
              <div className={style.inputWithButton}>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <button type="button" className={style.verifyBtn}>
                  Verify
                </button>
              </div>
            </div>
          </div>

          <div className={style.grid}>
            <div className={style.formGroup}>
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className={style.formGroup}>
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="">State/City</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
          </div>

          <div className={style.grid}>
            <div className={style.formGroup}>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Country</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </div>

            <div className={style.formGroup}>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
              >
                <option value="">Profession</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
          </div>

          <div className={style.formGroup}>
            <textarea
              name="experience"
              placeholder="Tell us a little about your experience related to your profession"
              maxLength="500"
              value={formData.experience}
              onChange={handleChange}
            ></textarea>
            <span className={style.counter}>
              {formData.experience.length}/500
            </span>
          </div>

          <div className={style.formGroup}>
            <input
              type="text"
              name="skills"
              placeholder="Enter Skills (Starting with #)"
              value={formData.skills}
              onChange={handleChange}
            />
            <small className={style.note}>Max 10 Keywords*</small>
          </div>

          <div className={style.formGroup}>
            <textarea
              name="about"
              placeholder="Tell us a little about yourself"
              maxLength="500"
              value={formData.about}
              onChange={handleChange}
            ></textarea>
            <span className={style.counter}>{formData.about.length}/500</span>
          </div>

          <div className={style.grid}>
            <div className={style.formGroup}>
              <input
                type="text"
                name="facebook"
                placeholder="Facebook Profile Link"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className={style.formGroup}>
              <input
                type="text"
                name="twitter"
                placeholder="Twitter Profile Link"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className={style.actions}>
            <button  type="button" className={style.cancel}>
              Cancel
            </button>
            <button  onClick={()=>{
                 Navigate("/Setup-Profile/Booking-Rates")
            }} type="submit" className={style.proceed}>
              Proceed
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PerInfo;
