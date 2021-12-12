import React from "react";
import {useHistory} from "react-router-dom";

const Wizard = ({ children }) => {
    const [activePageIndex, setActivePageIndex] = React.useState(0);
    const pages = React.Children.toArray(children);
    const currentPage = pages[activePageIndex];

    const goNextPage = () => {
        setActivePageIndex((index) => index + 1);
    };

    const goPrevPage = () => {
        setActivePageIndex((index) => index - 1);
    };
    const ButtonBack = () => {
        const history = useHistory();

        const goToBack = () => {
            history.push("/routines")
        };
        return (
            <button type="button"
                    onClick={goToBack}
                    className="button is-primary is-light wizard_buttons">
                Volver
            </button>)
    };
    const ButtonPrev = () =>
            <button type="button"
                disabled={!(activePageIndex > 0)}
                onClick={goPrevPage}
                className="button is-primary is-light wizard_buttons wizard_buttons">
                Atrás
            </button>

    const ButtonNext = () =>
            <button type="button"
                disabled={  !(activePageIndex < pages.length - 1)}
                onClick={goNextPage}
                className="button is-primary is-light wizard_buttons">
                Siguiente
            </button>
    return (
        <div className="wizard">
            <div className="wizard__content">{currentPage}</div>
            <div className="">
                <ButtonBack />
                <ButtonPrev />
                <ButtonNext />
            </div>
        </div>
    );
};

export default Wizard