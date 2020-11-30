import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function Terms() {

    const { t, } = useTranslation();

    return (
        <div className={styles.wrapper}>

            <h2>{t("terms_first")}</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sociis a habitasse, magna quam bibendum ante tortor egestas accumsan praesent integer.
                Netus platea morbi magnis odio ad volutpat id nibh fusce blandit, dui potenti est eros nascetur penatibus non lacinia sodales.
                Massa tincidunt litora risus vivamus orci aliquet porta dis vulputate volutpat, velit torquent sociis tortor morbi congue quam ad penatibus nunc,
                fringilla et eu neque erat nulla hac interdum lacus.

                Natoque odio imperdiet iaculis et vivamus fringilla, leo eu vestibulum penatibus nam egestas, varius enim orci dui curae.
                Porta semper montes elementum scelerisque conubia rutrum mus suspendisse urna ac cubilia blandit fusce leo, integer iaculis imperdiet sagittis
                metus purus lacinia tellus dapibus fermentum condimentum risus eleifend. Phasellus etiam hac eget facilisi ullamcorper hendrerit diam,
                torquent mi porta bibendum semper dapibus egestas, vitae habitasse fermentum molestie taciti sociosqu.
			</p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sociis a habitasse, magna quam bibendum ante tortor egestas accumsan praesent integer.
                Netus platea morbi magnis odio ad volutpat id nibh fusce blandit, dui potenti est eros nascetur penatibus non lacinia sodales.
                Massa tincidunt litora risus vivamus orci aliquet porta dis vulputate volutpat, velit torquent sociis tortor morbi congue quam ad penatibus nunc,
                fringilla et eu neque erat nulla hac interdum lacus.

                Natoque odio imperdiet iaculis et vivamus fringilla, leo eu vestibulum penatibus nam egestas, varius enim orci dui curae.
                Porta semper montes elementum scelerisque conubia rutrum mus suspendisse urna ac cubilia blandit fusce leo, integer iaculis imperdiet sagittis
                metus purus lacinia tellus dapibus fermentum condimentum risus eleifend. Phasellus etiam hac eget facilisi ullamcorper hendrerit diam,
                torquent mi porta bibendum semper dapibus egestas, vitae habitasse fermentum molestie taciti sociosqu.
                Lorem ipsum dolor sit amet consectetur adipiscing elit sociis a habitasse, magna quam bibendum ante tortor egestas accumsan praesent integer.
                Netus platea morbi magnis odio ad volutpat id nibh fusce blandit, dui potenti est eros nascetur penatibus non lacinia sodales.
                Massa tincidunt litora risus vivamus orci aliquet porta dis vulputate volutpat, velit torquent sociis tortor morbi congue quam ad penatibus nunc,
                fringilla et eu neque erat nulla hac interdum lacus.
			</p>
        </div>
    );
}