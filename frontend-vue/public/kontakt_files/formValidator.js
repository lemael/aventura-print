(function(window){
    function hasInvalidChars(value){
        return /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(value);
    }

    function hasHTML(value){
        return /<[^>]*>/.test(value);
    }

    function countDigits(value){
        return (value.match(/\d/g) || []).length;
    }

    const PHONE_FIELDS = new Set(['telefon','handy','mobile','telefax']);

    const defaultFields = {
        vorname:    [false, 1, 50, /^[\p{L}][\p{L} .'-]{0,49}$/u],
        nachname:   [false, 1, 50, /^[\p{L}][\p{L} .'-]{0,49}$/u],
        firma:      [false, 1, 100, /^[\p{L}\p{N} &.,'\/-]{0,99}$/u],
        strasse:    [true, 1, 100, /^[\p{L}\p{N}][\p{L}\p{N} .,'\/-]{0,99}$/u],
        plz:        [true, 3, 12, /^[\p{L}\p{N} -]{3,12}$/u],
        ort:        [true, 1, 80, /^[\p{L}][\p{L} '-]{0,79}$/u],
        land:       [true, 0, 80, null],
        telefon:    [false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        handy:      [false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        Handy:      [false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        mobile:     [false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        mobiltelefon:[false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        telefax:    [false, 3, 30, /^[0-9+\-()\/ ]{3,30}$/],
        email:      [true, 5, 254, /^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        homepage:   [false, 0, 200, null],
        mitteilung: [true, 1, 2000, null]
    };

    function validateField(value, required, min, max, pattern, key=null){
        value = value.trim();
        const isEmpty = value === '';

        if (required && isEmpty) return false;
        if (!required && isEmpty) return true;

        if (value.length < min || value.length > max) return false;

        if (hasInvalidChars(value) || hasHTML(value)) return false;

        if (pattern && !pattern.test(value)) return false;

        if (PHONE_FIELDS.has(key) && countDigits(value) < 6) return false;

        if (key === 'homepage' && value !== '') {
            try {
                let url = value;
                if (!/^https?:\/\//i.test(url)) {
                    url = 'https://' + url;
                }

                const parsed = new URL(url);

                if (!/^https?:$/.test(parsed.protocol)) return false;
                if (parsed.username || parsed.password) return false;

            } catch {
                return false;
            }
        }

        return true;
    }
    function attachValidator(form, options = {}){
        const fields = options.fields || defaultFields;

        let clickedBtn = null;

        form.addEventListener('click', function(e){
            const btn = e.target.closest('button, input[type="submit"]');
            if (btn && form.contains(btn)) {
                clickedBtn = btn;
            }
        });

        form.addEventListener('submit', function(e){
            if (!clickedBtn) {
                clickedBtn = document.activeElement;
            }

            const btnName = clickedBtn?.name;

            if (btnName !== 'cmd_bestellung') {
                return false;
            }

            let valid = true;
            let firstErrorField = null;

            for (const [key, rules] of Object.entries(fields)) {
                const [required, min, max, pattern] = rules;
                const input = form.querySelector(`[name="${key}"]`);
                if (!input){
                    continue;
                }

                if (input.type === 'hidden' || input.offsetParent === null) {
                    continue;
                }

                if (!validateField(input.value, required, min, max, pattern, key)) {
                    valid = false;
                    firstErrorField = key;
                    break;
                }
            }

            if (!valid) {
                e.preventDefault();
                alert("Bitte geben Sie ein gültiges ein " + firstErrorField);
                const el = form.querySelector(`[name="${firstErrorField}"]`);
                if (el) el.focus();
            }
        });
    }
    window.FormValidator = {
        attachValidator,
        validateField,
        defaultFields
    };

})(window);