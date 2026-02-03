import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import styles from './LoginScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import SocialButton from '../molecules/SocialButton/SocialButton';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate login logic
    console.log('Attempting login...');
    onLogin();
    navigate(RoutePath.Home);
  };

  return (
    <div className={`${styles.loginScreen} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon name="dry_cleaning" className={styles.hangerIcon} size="xl" />
        </div>
        <TextElement variant="h1" as="h1" font="display" spacing="widest" className={styles.appTitle}>
          Style Me
        </TextElement>
        <TextElement variant="p" spacing="widest" className={styles.appSubtitle}>
          Personal Styling
        </TextElement>
      </div>

      <div className={`${styles.loginCard} animate-slide-up-lux`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            placeholder="name@luxury.com"
            type="email"
            id="email"
            className={styles.formInput}
          />

          <div className={styles.passwordField}>
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              defaultValue="••••••••"
              id="password"
              className={styles.formInput}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.togglePasswordVisibility}
            >
              <Icon name={showPassword ? 'visibility_off' : 'visibility'} size="md" />
            </button>
            <div className={styles.forgotPasswordLinkContainer}>
              <a className={styles.forgotPasswordLink} href="#">
                Forgot Password?
              </a>
            </div>
          </div>

          <Button type="submit" className={styles.loginButton}>
            Login
          </Button>

          <div className={styles.socialDivider}>
            <div className={styles.dividerLine}></div>
            <TextElement variant="span" spacing="widest" className={styles.socialDividerText}>Social Access</TextElement>
            <div className={styles.dividerLine}></div>
          </div>

          <div className={styles.socialButtonsContainer}>
            <SocialButton provider="apple" />
            <SocialButton provider="google" />
          </div>
        </form>
      </div>

      <div className={styles.signupPrompt}>
        <TextElement variant="span" spacing="wide" weight="medium" className={styles.signupText}>New to Style-Me? </TextElement>
        <a className={styles.createAccountLink} href="#">Create Account</a>
      </div>
    </div>
  );
};

export default LoginScreen;