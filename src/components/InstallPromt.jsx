import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Update UI notify the user they can install the PWA
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // We've used the prompt, and can't use it again
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="install-prompt-overlay">
            <div className="install-prompt-card">
                <div className="install-prompt-header">
                    <div className="install-prompt-icon">✨</div>
                    <div className="install-prompt-text">
                        <h3>Install GlobalPulse</h3>
                        <p>Get the best experience by installing our app on your home screen.</p>
                    </div>
                </div>
                <div className="install-prompt-actions">
                    <button className="install-btn secondary" onClick={handleDismiss}>Maybe Later</button>
                    <button className="install-btn primary" onClick={handleInstallClick}>Install Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstallPrompt;