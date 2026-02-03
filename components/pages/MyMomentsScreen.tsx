import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_WEATHER_INFO, MOCK_LOOK_SUGGESTION, RoutePath } from '../../constants';
import styles from './MyMomentsScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import GenUIImage from '../atoms/Image/Image'; // FIX: Changed Image to GenUIImage
import Button from '../atoms/Button/Button';
import LookCard from '../molecules/LookCard/LookCard';
import WeatherDisplay from '../molecules/WeatherDisplay/WeatherDisplay';

const MyMomentsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLookClick = (lookId: string) => {
    navigate(RoutePath.LookDetail.replace(':lookId', lookId));
  };

  return (
    <div className={`${styles.myMomentsScreen} animate-fade-in`}>
      {/* Background Image (fixed to top part of the screen) */}
      <div className={styles.backgroundImageContainer}>
        <GenUIImage // FIX: Changed Image to GenUIImage
          alt="Minimalist Wardrobe"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftxG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa"
          className={styles.backgroundImage}
          brightness="dim"
        />
        <div className={styles.imageOverlay}></div>
        <header className={styles.headerTitleContainer}>
          <TextElement variant="h1" as="h1" font="display" weight="bold" spacing="luxury-lg" className={styles.headerTitle}>STYLE ME</TextElement>
        </header>
      </div>

      {/* Bottom Sheet Section */}
      <div className={`${styles.bottomSheet} ios-shadow-top animate-slide-up-lux`}>
        <div className={styles.sheetHandleContainer}>
          <div className={styles.sheetHandle}></div>
        </div>

        <div className={styles.scrollableContent}>
          <div className={styles.filterButtonsContainer}>
            <div className={styles.filterButtonsWrapper}>
              <Button variant="ghost" className={styles.filterButton}>
                MY CLOSET
              </Button>
              <Button className={styles.filterButtonActive}>
                HYBRID
              </Button>
              <Button variant="ghost" className={styles.filterButton}>
                STORE
              </Button>
            </div>
          </div>

          <div className={styles.momentsHeader}>
            <TextElement variant="h2" as="h2" font="display" weight="bold" className={styles.momentsTitle}>MY MOMENTS</TextElement>
            <TextElement variant="small" spacing="widest" className={styles.momentsSubtitle}>Intelligent suggestions for your day</TextElement>
          </div>

          <section className={styles.weatherSection}>
            <WeatherDisplay
              temperature={MOCK_WEATHER_INFO.temperature}
              condition={MOCK_WEATHER_INFO.condition}
              recommendation={MOCK_WEATHER_INFO.recommendation}
            />
          </section>

          <section className={styles.lookSuggestionsSection}>
            <div className={styles.lookSuggestionsHeader}>
              <div className={styles.lookSuggestionsTitleWrapper}>
                <Icon name="work" className={styles.lookSuggestionsIcon} />
                <TextElement variant="h3" as="h3" font="accent" weight="bold" spacing="luxury-sm" className={styles.lookSuggestionsTitle}>Work Day</TextElement>
              </div>
              <div className={styles.lookTags}>
                <span className={styles.lookTagCorporate}>Corporate</span>
                <span className={styles.lookTagFresh}>Fresh</span>
              </div>
            </div>

            <div className={styles.lookCardsContainer}>
              <LookCard
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD6RCwAduhgD7Gtue8XNUDI7rLwqKh691pxWhRSWKTrDy_1S2gJ55_wn0g8YGFYhEYJ5ljk6_D7Q5h6KDtGQ5GMttBo_fYTcSO6uVjb_1_ARXSF3itfnkifSl5a0SfGXut8Txo8qAPmuKW-apQBGH1XM-bYzwN_jD9JyswDqlfIL883fIuLIpJrOUGEBUSHfGU3PfiOsyU6LJlN71OGi8URXJR2lUqyztV-dU9frN5HLO1x8PeqFnah0FmtdPZDdQOlv9liJIWfGuu6"
                title="Business Modern"
                subtitle="Blazer & Tailoring"
                lookId="look-business-modern"
                onLookClick={handleLookClick}
              />
              <LookCard
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDdHN5EW_VuccR6dT-1nIbNuzBCxW0F1yDHkl0OHGMQxyLMS-phwZERCQo6srhuXmD7pELbwMIXGIQ4pmSuklLXzpyidf65qdUbEFFa2lAvIOPc1TL6gHnaHudjYGjH1BD6xHosoBKIOzzAzRAUO4CBrAbVE-zG9RLPZwhl9qwMh8iYFNmJd5eEavqlvLD8xIqaCV7UTEL0T8MDTQTjEJBRZoCVvaAzdhFNP6dpvce_tXYK9jko7FYgunx0KVPyr9dG_ucVagrb7dLs"
                title="Office Casual"
                subtitle="Light & Elegant"
                lookId="look-office-casual"
                onLookClick={handleLookClick}
              />
              <LookCard
                imageUrl={MOCK_LOOK_SUGGESTION.imageUrl}
                title="Afternoon Chic"
                subtitle="Comfort & Style"
                lookId={MOCK_LOOK_SUGGESTION.id}
                onLookClick={handleLookClick}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyMomentsScreen;