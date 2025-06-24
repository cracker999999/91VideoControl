// ==UserScript==
// @name         91Porn视频播放控制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  使用左右方向键控制91Porn视频前进/后退10秒
// @author       Leen
// @match        https://www.91porn.com/*
// @grant        none
// @icon         https://www.91porn.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // 创建通知元素
    let notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        z-index: 9999;
        display: none;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(notification);

    // 显示通知
    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        notification.style.opacity = '1';

        // 设置定时器，自动隐藏通知
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 1000);
    }

    // 等待页面加载完成
    window.addEventListener('load', function() {
        
    });

    // 键盘事件监听
    document.addEventListener('keydown', function(e) {
        // 获取视频元素
        const video = document.querySelector('video');
        if (!video) return;
        
        // 左箭头键 - 后退10秒
        if (e.key === 'ArrowLeft') {
            video.currentTime = Math.max(0, video.currentTime - 10);
            e.preventDefault();
        }
        // 右箭头键 - 前进10秒
        else if (e.key === 'ArrowRight') {
            video.currentTime = Math.min(video.duration, video.currentTime + 10);
            e.preventDefault();
        }
        // 上箭头键 - 增加音量
        else if (e.key === 'ArrowUp') {
            video.volume = Math.min(1, video.volume + 0.1);
            showNotification(`音量: ${(video.volume * 100).toFixed(0)}%`);
            e.preventDefault();
        }
        // 下箭头键 - 减少音量
        else if (e.key === 'ArrowDown') {
            video.volume = Math.max(0, video.volume - 0.1);
            showNotification(`音量: ${(video.volume * 100).toFixed(0)}%`);
            e.preventDefault();
        }
        //space 键 - 暂停/播放
        else if (e.key === ' ') {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            e.preventDefault();
        }
        // M 键 - 静音/取消静音
        else if (e.key === 'm' || e.key === 'M') {
            video.muted = !video.muted;
            e.preventDefault();
        }
        // F 键 - 全屏/退出全屏
        else if (e.key === 'f' || e.key === 'F') {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else {
                document.exitFullscreen();
            }
            e.preventDefault();
        }
    });

    console.log('91Porn视频控制脚本已加载 - 使用左右方向键控制播放进度');
})();
