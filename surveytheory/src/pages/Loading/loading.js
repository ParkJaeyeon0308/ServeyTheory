import React from "react";
import $ from "jquery";
window.$ = $;

export default function Loading() {
    $(document).ready(function () {
        setTimeout(function () {
            $(".loader").delay(1500).fadeOut(1500);
        });
    });

    return (
        <div>
            <div class="loader">
                <div id="container">
                    <img
                        className="loading-logo"
                        src="/images/logo/mini-logo.png"
                        alt="mini-logo"
                    />
                    <div id="one"></div>
                    <div id="two"></div>
                    <div id="three"></div>
                    <span id="loading-text">LOADING</span>
                </div>
            </div>
        </div>
    );
}
