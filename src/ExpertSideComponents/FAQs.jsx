import style from './FAQs.module.css';
import { FaKey, FaEnvelope } from "react-icons/fa";

const FAQs = () => {
  return (
    <div className={style.container}>
      <h2 className={style.heading}>Frequently Asked Questions</h2>
      <p className={style.subHeading}>
        Quick answers to question you may have. If you can't find what you are looking for view our documentation.
      </p>

      <div className={style.grid}>
        {/* Row 1 */}
        <div className={style.card}>
          <div className={style.icon}><FaKey /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Password?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className={style.card}>
          <div className={style.icon}><FaKey /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Password?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className={style.card}>
          <div className={style.icon}><FaKey /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Password?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.icon}><FaEnvelope /></div>
          <div className={style.textBlock}>
            <h4>How can i change my account Email?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pulvinar mi, at vulputate libero.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
