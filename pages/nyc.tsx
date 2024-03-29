import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './../styles/page.module.css';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
export default function Nyc({ }) {

	const { t } = useTranslation();
	const [query] = useLanguageQuery();

	return (
		<div className={`${styles.container} ${styles.nyc}`}>
			<Head>
				<title>{t('nyc.headline')}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.main}>
				<nav className={styles.langSwitcher}>
					{t('ui.languageSwitcher')}
					<LanguageSwitcher lang="de">de</LanguageSwitcher> |{' '}
					<LanguageSwitcher lang="en">en</LanguageSwitcher>
				</nav>
				<h1 className={styles.title}>{t('nyc.headline')}</h1>
				<p className={styles.copy}>{t('nyc.copy')}</p>
				<p className={styles.navigation}>
					<Link href={{ pathname: t('nav.index.route'), query: query }}>
						{t('nav.index.text')}
					</Link>
				</p>
			</div>
			<div className={styles.imageCredits}>{t('nyc.imageCredits')}</div>
		</div>
	);
}
