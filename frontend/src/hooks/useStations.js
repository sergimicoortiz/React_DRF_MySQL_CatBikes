import { useState, useEffect, useCallback } from "react"
import StationService from '../services/Dashboard/StationService';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useStations() {
    const navigate = useNavigate();
    const [stations, setStations] = useState([]);

    useEffect(function () {
        StationService.GetStations()
            .then(res => setStations(res.data))
            .catch(e => console.error(e));
    }, []);

    // const useDeleteArticle = (slug) => {
    //     ArticleService.DeleteArticle(slug)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 setArticles(articles.filter(item => item.slug !== slug));
    //                 toast.success('Article deleted');
    //             };
    //         })
    //         .catch(e => console.error(e));
    // }

    // const useOneArticle = useCallback((slug) => {
    //     console.log('a');
    //     ArticleService.GetArticle(slug)
    //         .then(res => setArticles([res.data.data]))
    //         .catch(e => console.error(e));
    // }, []);

    // const useUpdateArticle = useCallback((slug, data) => {
    //     ArticleService.UpdateArticle(slug, { 'article': data })
    //         .then(res => {
    //             if (res.status === 200) {
    //                 toast.success('Article updated');
    //                 navigate('/article');
    //             }
    //         })
    //         .catch(e => console.error(e));
    // }, []);

    // const useCreateArticle = useCallback(data => {
    //     ArticleService.CreateArticles({ 'article': data })
    //         .then(res => {
    //             if (res.status === 200) {
    //                 toast.success('Article created');
    //                 navigate('/article');
    //             }
    //         })
    //         .catch(e => console.error(e));
    // }, []);

    return { stations };
}