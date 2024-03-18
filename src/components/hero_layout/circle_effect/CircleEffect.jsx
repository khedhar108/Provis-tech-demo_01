import { CiDeliveryTruck } from "react-icons/ci";
import { GiAirplaneDeparture } from "react-icons/gi";
import styles from "./CircleEffect.module.css";

function CircleEffect() {
  return (
    <div className={`${styles.circleEffectContainer}`}>
      <div className={styles.circleEffect}>
        <div className={styles.iconContainer}>
          <CiDeliveryTruck className={styles.icon} />
        </div>
        <div className={styles.iconContainer}>
          <GiAirplaneDeparture className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default CircleEffect;