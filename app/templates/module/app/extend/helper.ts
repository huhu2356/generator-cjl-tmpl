export default {
    paginate({ page = 1, pageSize = 10 }) {
        const offset = Number((page - 1) * pageSize);
        const limit = Number(pageSize);

        return {
            offset,
            limit,
        };
    },

    tryJsonParse(str: string) {
        try {
            const parseData = JSON.parse(str);
            return {
                valid: true,
                value: parseData,
            };
        } catch (err) {
            return {
                valid: false,
                value: str,
            };
        }
    },
};
