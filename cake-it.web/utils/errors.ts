export const logAndReThrow = (err: any) => {
    console.log(JSON.stringify(err, null, 2));
    throw err;
};
