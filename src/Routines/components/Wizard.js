import React from "react";

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
    const goToBack = () => {
        //setActivePageIndex((index) => index - 1);
    };

    const ButtonPrev = () =>
        activePageIndex > 0 ? (
            <button type="button"
                onClick={goPrevPage}
                className="button is-primary is-light wizard_buttons wizard_buttons">
                Atrás
            </button>
        ) : null;
    const ButtonNext = () =>
        activePageIndex < pages.length - 1 ? (
            <button type="button"
                onClick={goNextPage}
                className="button is-primary is-light wizard_buttons">
                Siguiente
            </button>
        ) : null;
    const ButtonBack = () =>
            <button type="button"
                    onClick={goToBack}
                    className="button is-primary is-light wizard_buttons">
                Volver
            </button>
        ;
    return (
        <div className="wizard">
            <div className="">
                <ButtonBack />
            </div>
            <div className="wizard__content">{currentPage}</div>
            <div className="">
                <ButtonPrev />
                <ButtonNext />
            </div>
        </div>
    );
};

export default Wizard