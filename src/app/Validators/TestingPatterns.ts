export class TestingPatters {

    private controls = '';

    validateEmail(controls: { value: string; }) {

        // tslint:disable-next-line: max-line-length
        const Expression = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (Expression.test(controls.value)) {
            return null;
        } else {
            return { validateEmail: true };
        }
    }

    validateUsername(controls: { value: string; }) {
        const Expression = new RegExp(/^[a-zA-Z0-9]+$/);
        if (Expression.test(controls.value)) {
            return null;
        } else {
            return { validateUsername: true };
        }
    }

    validatePassword(controls: { value: string; }) {
        const Expression = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W]).{8,35}$/);
        if (Expression.test(controls.value)) {
            return null;
        } else {
            return { validatePassword: true };
        }
    }

}