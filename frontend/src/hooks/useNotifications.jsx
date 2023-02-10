import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import NotificationsContext from "../context/NotificationsContext";

export function useNotifications() {
    const { notifications, setNotifications } = useContext(NotificationsContext);
    return {
        notifications,
        setNotifications
    }
}