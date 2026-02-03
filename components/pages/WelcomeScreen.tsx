import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import styles from './WelcomeScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import GenUIImage from '../atoms/Image/Image'; // FIX: Changed Image to GenUIImage
import Button from '../atoms/Button/Button';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleJourneySelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.welcomeScreen}>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logoIconContainer}>
            <Icon name="checkroom" className={styles.logoIcon} />
          </div>
          <TextElement variant="h1" as="h1" font="display" weight="extralight" spacing="widest" className={styles.appTitle}>
            Style Me
          </TextElement>
          <TextElement variant="p" font="sans" weight="medium" spacing="luxury-xl" className={styles.appSubtitle}>
            The Art of Dressing
          </TextElement>
        </header>

        <div className={`glass-card ${styles.journeyCard}`}>
          <div className={styles.journeyCardHeader}>
            <TextElement variant="h2" as="h2" font="display" weight="semibold" italic className={styles.journeyTitle}>
              Escolha sua Jornada
            </TextElement>
            <div className={styles.divider}></div>
            <TextElement variant="small" font="sans" weight="bold" spacing="widest" className={styles.journeySubtitle}>
              Exclusividade em cada detalhe
            </TextElement>
          </div>

          <Button variant="ghost" className={styles.navLinkCard} onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className={styles.avatarWrapper}>
              <GenUIImage // FIX: Changed Image to GenUIImage
                alt="Consumidor Elegante"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4gefef3AxLHDGqtRt4bw5OkwXYP_q6Obl4e1PfETaq335oUyQ5EyyN4qAAZDxzyizNlPRwawobnjvw6ohmgobmvph9kst_zdyjo8q0id2anrhjjdvzzucry4l9miipagci_lyga9m4zkg6izsbnmgem_fvu_0l9ovrnyelmyxgdtu7xgadpsgxgi_yhwbq3zdorp_clv-ohfp4orkxxv_m3k6gvvezbmu-wiqc9r2jn0vfilpyah1jevzxia6dhfrj2y9s-fypi_zne_n4k9yeidlran-zb_lz46himdac_f6kyn6"
                className={styles.avatarImage}
                grayscale
              />
            </div>
            <div className={styles.linkTextContent}>
              <TextElement variant="h3" as="h3" font="sans" weight="bold" spacing="widest" className={styles.linkTitle}>CONSUMIDOR</TextElement>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-md" className={styles.linkDescription}>ANÁLISE CORPORAL E CURADORIA PERSONALIZADA PARA SEU ESTILO.</TextElement>
              <TextElement variant="span" font="sans" weight="bold" spacing="luxury-lg" className={styles.linkEnter}>
                ENTRAR <Icon name="arrow_forward_ios" size="xs" className={styles.linkArrowIcon} />
              </TextElement>
            </div>
          </Button>

          <div className={styles.cardDivider}></div>

          <Button variant="ghost" className={styles.navLinkCard} onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className={styles.avatarWrapper}>
              <GenUIImage // FIX: Changed Image to GenUIImage
                alt="Stylist Profissional"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_hUOTJyMi78_MY6D-l_PGGsTFlDdlIljKN930CJHS9fPsC7ZoY5jRKTCKCvFrTmIb4SvlBSb93QOegJIYMuG8n6elmVZE09_87qdYN9G16r8xnG0YEjmey1q9S74GezbgRsZzJ5JknZNyKuRnlcfGM0cY_lRSAI7iEnk-RrTJuDKnGE6N7F57Z0JQxe8ydEA0LEIhOKTQtOCrDcOFuBKHhrKdUssYOzGLuJW82hgm2_4GerDXKe2YFq-tQAtpnbLaBTxE70UJN"
                className={styles.avatarImage}
                grayscale
              />
            </div>
            <div className={styles.linkTextContent}>
              <TextElement variant="h3" as="h3" font="sans" weight="bold" spacing="widest" className={styles.linkTitle}>STYLIST</TextElement>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-md" className={styles.linkDescription}>ECOSSISTEMA DIGITAL PARA ELEVAR SEU ATENDIMENTO DE LUXO.</TextElement>
              <TextElement variant="span" font="sans" weight="bold" spacing="luxury-lg" className={styles.linkEnter}>
                ENTRAR <Icon name="arrow_forward_ios" size="xs" className={styles.linkArrowIcon} />
              </TextElement>
            </div>
          </Button>

          <div className={styles.cardDivider}></div>

          <Button variant="ghost" className={styles.navLinkCard} onClick={() => handleJourneySelect(RoutePath.Login)}>
            <div className={styles.avatarWrapper}>
              <GenUIImage // FIX: Changed Image to GenUIImage
                alt="Boutique de Luxo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeD69HC5_3MMzbmWRFkm_-EkfqT4_rxFoy6lnkB1wkxY93BueKn9XX-oQzpjmR4zceSuv3Cp311mlMaPMXuLKtB3N49vm1cERm0IYBW2nCyr7Fb345JjCWmMbsSmOw4W6P7CRY-rOSji9BSAaZ-3q8ZQg-2ipHmL-z0qHM6PWVH50HWUFeTu9h5IpvdxcwGXqalFZYYDero2O65A2AkdCbTI811bolmqilZsvm_c6YpDJ0hzgtzIZnPWNKHeS58dk54B-yKX8hMF1W"
                className={styles.avatarImage}
                grayscale
              />
            </div>
            <div className={styles.linkTextContent}>
              <TextElement variant="h3" as="h3" font="sans" weight="bold" spacing="widest" className={styles.linkTitle}>LOJA</TextElement>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-md" className={styles.linkDescription}>IA GENERATIVA INTEGRADA PARA CONVERSÃO E FIDELIZAÇÃO.</TextElement>
              <TextElement variant="span" font="sans" weight="bold" spacing="luxury-lg" className={styles.linkEnter}>
                ENTRAR <Icon name="arrow_forward_ios" size="xs" className={styles.linkArrowIcon} />
              </TextElement>
            </div>
          </Button>

          <div className={styles.footerBrandSection}>
            <div className={styles.vesttagBrand}>
              <div className={styles.vesttagLogo}>
                <TextElement variant="span" className={styles.vesttagLetter}>V</TextElement>
              </div>
              <TextElement variant="span" className={styles.vesttagText}>VESTTAG<br /><TextElement variant="span" weight="light" className={styles.vesttagTextLight}>BODY ANALYSIS</TextElement></TextElement>
            </div>
            <div className={styles.googleAiBrand}>
              <TextElement variant="span" className={styles.googleAiText}>POWERED BY<br /><TextElement variant="span" weight="light" className={styles.googleAiTextLight}>GOOGLE AI</TextElement></TextElement>
              <svg className={styles.googleAiIcon} viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.4-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
            </div>
          </div>
        </div>

        <div className={styles.featuredSection}>
          <TextElement variant="small" weight="semibold" spacing="luxury-lg" className={styles.featuredTitle}>As featured in</TextElement>
          <div className={styles.featuredBrands}>
            <TextElement variant="span" font="display" italic className={styles.vogue}>VOGUE</TextElement>
            <TextElement variant="span" font="display" spacing="widest" className={styles.elle}>ELLE</TextElement>
            <TextElement variant="span" font="display" spacing="luxury-lg" className={styles.bazaar}>BAZAAR</TextElement>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomeScreen;