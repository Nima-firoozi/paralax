
    const main = document.querySelector('main')
    const mySection = document.querySelector('section')
    const myUl = document.querySelector('ul')
    const p = document.querySelectorAll('section:nth-of-type(2)>p')
    const h = document.querySelectorAll('section:nth-of-type(2)>h3')
    const ulChilds = document.querySelectorAll('ul>li')

    myImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
    let counter = -1
    p.forEach(element => {
        element.classList.add('bottom')

    });

    h.forEach(element => {
        element.classList.add('bottom')
    })

    function getStyle(element) {
        let computedStyle = getComputedStyle(element)
        return computedStyle
    }

    let flag = 1
    let oldScroll = 0;
    window.addEventListener('scroll', function () {
        // zoom background section 1

        if (window.scrollY > 100 && window.scrollY < 650) {
            mySection.style.backgroundSize = parseFloat(getStyle(mySection).backgroundSize) + 0.1 * (window.scrollY - oldScroll) + '%'
        }
        window.scrollY >= 650 && (mySection.style.backgroundSize = '155%')
        window.scrollY <= 100 && (mySection.style.backgroundSize = '100%')

        // zoom background section 1
        if (window.scrollY >= 450 && window.scrollY <= 650) {
            mySection.firstElementChild.classList.add('op')
        } else if (window.scrollY < 450) {
            mySection.firstElementChild.classList.remove('op')

        }

        if (window.scrollY >= 650 && flag) {
            let p1 = mySection.firstElementChild.nextElementSibling
            let p2 = p1.nextElementSibling
            let p3 = p2.nextElementSibling
            p1.classList.add('top')
            setTimeout(() => {
                p2.classList.add('top')
            }, 300);

            setTimeout(() => {
                p3.classList.add('top')
                h[0].classList.remove('bottom')
            }, 600);


            setTimeout(() => {
                p[0].classList.remove('bottom')

            }, 800);

            myUl.classList.add('op')
            myUl.children[4].firstElementChild.style.marginLeft = myUl.children[0].clientWidth / 2 + myUl.children[0].offsetLeft - myUl.children[0].offsetLeft + 'px'
            flag = 0
        } else if (window.scrollY <= 650 && !flag) {
            let p1 = mySection.firstElementChild.nextElementSibling
            let p2 = p1.nextElementSibling
            let p3 = p2.nextElementSibling
            counter = -1
            p.forEach(element => {
                element.classList.add('bottom')
            });
            setTimeout(() => {
                p3.classList.remove('top')
                h.forEach(element => {
                    element.classList.add('bottom')
                });
            }, 300);

            setTimeout(() => {
                p2.classList.remove('top')
                mySection.style.backgroundImage = "url(img/" + myImgs[counter + 1] + ")"
            }, 600);

            setTimeout(() => {
                p1.classList.remove('top')
            }, 800);
            myUl.classList.remove('op')
            flag = 1
        }

        switch (true) {

            case (window.scrollY >= 650 && window.scrollY < 1300):
                if (counter != 0) {
                    counter = 0

                    mySection.firstElementChild.classList.add('op')
                    setTimeout(() => {
                        mySection.style.backgroundImage = "url(img/" + myImgs[counter + 1] + ")"
                        mySection.firstElementChild.classList.remove('op')
                    }, 600);
                    myUl.children[4].firstElementChild.style.marginLeft = myUl.children[counter].clientWidth / 2 + myUl.children[counter].offsetLeft - myUl.children[0].offsetLeft + 'px'
                    ulChilds.forEach((element, i) => {
                        element.classList.remove('active')
                        i == counter && element.classList.add('active')

                    });

                    h.forEach((element, i) => {
                        if (i == counter) {
                            setTimeout(() => {
                                p[i].classList.remove('top')
                                h[i].classList.remove('bottom')
                            }, 300);
                            setTimeout(() => {
                                h[i].classList.remove('top')
                                p[i].classList.remove('bottom')
                            }, 600);
                        } else if (i > counter) {
                            setTimeout(() => {
                                h[i].classList.add('bottom')
                            }, 300);
                            p[i].classList.add('bottom')
                        } else {
                            h[i].classList.add('top')
                            setTimeout(() => {
                                p[i].classList.add('top')
                            }, 300);
                        }


                    });
                }

                break


            case (window.scrollY >= 1300 && window.scrollY < 1950):

                if (counter != 1) {

                    counter = 1
                    mySection.firstElementChild.classList.add('op')
                    setTimeout(() => {
                        mySection.style.backgroundImage = "url(img/" + myImgs[counter + 1] + ")"
                        mySection.firstElementChild.classList.remove('op')
                    }, 600);
                    myUl.children[4].firstElementChild.style.marginLeft = myUl.children[counter].clientWidth / 2 + myUl.children[counter].offsetLeft - myUl.children[0].offsetLeft + 'px'
                    ulChilds.forEach((element, i) => {
                        element.classList.remove('active')
                        i == counter && element.classList.add('active')

                    });
                    h.forEach((element, i) => {
                        if (i == counter) {
                            setTimeout(() => {
                                p[i].classList.remove('top')
                                h[i].classList.remove('bottom')
                            }, 300);
                            setTimeout(() => {
                                h[i].classList.remove('top')
                                p[i].classList.remove('bottom')
                            }, 600);
                        } else if (i > counter) {
                            setTimeout(() => {
                                h[i].classList.add('bottom')
                            }, 300);
                            p[i].classList.add('bottom')
                        } else {
                            h[i].classList.add('top')
                            setTimeout(() => {
                                p[i].classList.add('top')
                            }, 300);
                        }


                    });
                }


                break

            case (window.scrollY >= 1950 && window.scrollY < 2600):

                if (counter != 2) {
                    counter = 2
                    mySection.firstElementChild.classList.add('op')
                    setTimeout(() => {
                        mySection.style.backgroundImage = "url(img/" + myImgs[counter + 1] + ")"
                        mySection.firstElementChild.classList.remove('op')
                    }, 600);
                    myUl.children[4].firstElementChild.style.marginLeft = myUl.children[counter].clientWidth / 2 + myUl.children[counter].offsetLeft - myUl.children[0].offsetLeft + 'px'
                    ulChilds.forEach((element, i) => {
                        element.classList.remove('active')
                        i == counter && element.classList.add('active')

                    });
                    h.forEach((element, i) => {
                        if (i == counter) {
                            setTimeout(() => {
                                p[i].classList.remove('top')
                                h[i].classList.remove('bottom')
                            }, 300);
                            setTimeout(() => {
                                h[i].classList.remove('top')
                                p[i].classList.remove('bottom')
                            }, 600);
                        } else if (i > counter) {
                            setTimeout(() => {
                                h[i].classList.add('bottom')
                            }, 300);
                            p[i].classList.add('bottom')
                        } else {
                            h[i].classList.add('top')
                            setTimeout(() => {
                                p[i].classList.add('top')
                            }, 300);
                        }


                    });
                }

                break

            case (window.scrollY >= 2600):

                if (counter != 3) {
                    counter = 3
                    mySection.firstElementChild.classList.add('op')
                    setTimeout(() => {
                        mySection.style.backgroundImage = "url(img/" + myImgs[counter + 1] + ")"
                        mySection.firstElementChild.classList.remove('op')
                    }, 600);
                    myUl.children[4].firstElementChild.style.marginLeft = myUl.children[counter].clientWidth / 2 + myUl.children[counter].offsetLeft - myUl.children[0].offsetLeft + 'px'
                    ulChilds.forEach((element, i) => {
                        element.classList.remove('active')
                        i == counter && element.classList.add('active')

                    });
                    h.forEach((element, i) => {
                        if (i == counter) {
                            setTimeout(() => {
                                p[i].classList.remove('top')
                                h[i].classList.remove('bottom')
                            }, 300);
                            setTimeout(() => {
                                h[i].classList.remove('top')
                                p[i].classList.remove('bottom')
                            }, 600);
                        } else if (i > counter) {
                            setTimeout(() => {
                                h[i].classList.add('bottom')
                            }, 300);
                            p[i].classList.add('bottom')
                        } else {
                            h[i].classList.add('top')
                            setTimeout(() => {
                                p[i].classList.add('top')
                            }, 300);
                        }


                    });
                }

                break

        }







        oldScroll = window.scrollY
    })


