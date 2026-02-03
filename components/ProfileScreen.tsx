import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';
import { UserProfile, Gender } from '../types';
import styles from './ProfileScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/GenUIImage/GenUIImage';
import SocialButton from '../molecules/SocialButton/SocialButton';

interface ProfileScreenProps {
  // onLogout: () => void; // Passed from App.tsx via Layout for consistency
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    height: "5'8\"",
    weight: '135 lbs',
    stylePreference: 'Minimalist Chic',
    whatsapp: '+1 (555) 000-0000',
    gender: Gender.FEMALE,
    avatarUrl: 'https://picsum.photos/80/80?random=100', // Mock avatar
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Profile saved:', profile);
    // In a real app, this would involve API calls to update the user profile.
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // This action would typically be handled by the parent App component's onLogout
    // For this mock, we'll navigate to login
    navigate(RoutePath.Login);
  };

  const handleEditAvatar = () => {
    // Navigate to a screen for capturing/selecting a new profile photo
    navigate(RoutePath.BodyPhotoCapture);
  };

  const styleOptions = [
    { value: 'Minimalist Chic', label: 'Minimalist Chic' },
    { value: 'Avant-Garde', label: 'Avant-Garde' },
    { value: 'Streetwear Luxury', label: 'Streetwear Luxury' },
    { value: 'Classic Professional', label: 'Classic Professional' },
  ];

  return (
    <div className={`${styles.profileScreen} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.headerIconContainer}>
          <svg className={styles.headerIcon} fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
            <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
          </svg>
        </div>
        <TextElement variant="h1" as="h1" font="display" weight="medium" spacing="luxury-lg" className={styles.appTitle}>
          Style Me
        </TextElement>
        <TextElement variant="p" font="sans" spacing="luxury-xl" className={styles.screenSubtitle}>
          Personal Styling
        </TextElement>
      </div>

      <div className={`${styles.profileCard} ios-shadow`}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            {profile.avatarUrl ? (
              <GenUIImage src={profile.avatarUrl} alt="User Avatar" className={styles.avatarImage} />
            ) : (
              <Icon name="person" size="xl" className={styles.defaultAvatarIcon} />
            )}
            <Button variant="iconOnly" className={styles.editAvatarButton} onClick={handleEditAvatar}>
              <Icon name="edit" size="xs" />
            </Button>
          </div>
        </div>

        <form className={styles.profileForm} onSubmit={handleSaveProfile}>
          <div className={styles.gridInputs}>
            <Input
              label="Height"
              placeholder='5&apos;8"'
              type="text"
              id="height"
              value={profile.height}
              onChange={handleChange}
              containerClassName={styles.luxuryInputContainer}
              className={styles.luxuryInput}
            />
            <Input
              label="Weight"
              placeholder="135 lbs"
              type="text"
              id="weight"
              value={profile.weight}
              onChange={handleChange}
              containerClassName={styles.luxuryInputContainer}
              className={styles.luxuryInput}
            />
          </div>

          <Input
            label="Style Preference"
            type="select"
            id="stylePreference"
            options={styleOptions}
            value={profile.stylePreference}
            onChange={handleChange} // This is line 93
            containerClassName={styles.luxuryInputContainer}
            className={styles.luxuryInput}
          />

          <Input
            label="Whatsapp"
            placeholder="+1 (555) 000-0000"
            type="tel"
            id="whatsapp"
            value={profile.whatsapp}
            onChange={handleChange}
            containerClassName={styles.luxuryInputContainer}
            className={styles.luxuryInput}
          />

          <div className={styles.saveButtonContainer}>
            <Button type="submit" className={styles.saveButton}>
              Save Profile
            </Button>
          </div>
        </form>

        <div className={styles.socialDivider}>
          <div className={styles.dividerLine}></div>
          <TextElement variant="small" weight="bold" spacing="widest" className={styles.socialDividerText}>Social Access</TextElement>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.socialButtonsContainer}>
          <SocialButton provider="apple" />
          <SocialButton provider="google" />
        </div>
      </div>

      <div className={styles.logoutPrompt}>
        <TextElement variant="span" spacing="wide" className={styles.logoutText}>Want to sign out?</TextElement>
        <Button variant="ghost" className={styles.logoutButton} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default ProfileScreen;