 export const handleDateDisplayed = () => {
        let ordinal = "";
        const todaysDate = new Date().getDate();
        if (todaysDate > 3 && todaysDate < 21) {
            ordinal = "th";
        } else {
            switch (todaysDate % 10) {
                case 1: {
                    ordinal = "st";
                    break;
                }
                case 2: {
                    ordinal = "nd";
                    break;
                }
                case 3: {
                    ordinal = "rd";
                    break;
                }
                default: {
                    ordinal = "th";
                }
            }
        }
        return `${todaysDate}${ordinal}`;
    }
    