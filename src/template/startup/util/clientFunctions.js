export default async (client) => {
    //log functions
    client.util.log = (text, /*rest are optional*/ type, leftColor, rightColor) => {
        console.log(`${chalk[leftColor || 'gray'](type ? `[${type}]` : '[ULOG]')} >> ${rightColor ? chalk[rightColor](text) : text}`);
    };

    
};