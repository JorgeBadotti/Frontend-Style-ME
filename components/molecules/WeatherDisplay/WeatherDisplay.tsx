import React from 'react';
import styles from './WeatherDisplay.module.css';
import Icon from '../../atoms/Icon/Icon';
import TextElement from '../../atoms/TextElement/TextElement';

interface WeatherDisplayProps {
  temperature: number;
  condition: string;
  recommendation: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ temperature, condition, recommendation }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.temperatureInfo}>
        <TextElement variant="small" font="accent" weight="bold" spacing="luxury-sm" className={styles.weatherLabel}>Weather-based suggestions</TextElement>
        <div className={styles.weatherDetails}>
          <Icon name="partly_cloudy_day" className={styles.weatherIcon} />
          <TextElement variant="h4" as="h3" font="accent" weight="bold" spacing="luxury-sm" className={styles.weatherText}>
            {temperature}°C - {condition}
          </TextElement>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.recommendationInfo}>
        <TextElement variant="small" font="accent" weight="bold" spacing="widest" className={styles.recommendationLabel}>Perfect for</TextElement>
        <TextElement variant="p" font="accent" className={styles.recommendationText}>{recommendation}</TextElement>
      </div>
    </div>
  );
};

export default WeatherDisplay;