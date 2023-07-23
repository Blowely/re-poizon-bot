const startBot = async (chatId, bot, UserModel, ChannelModel) => {
    try {
        const message = await bot.sendMessage(chatId, 'Привет! Моя цель - автоматизировать твою ручную работу по управлению информацией о рекламе в твоем канале',
            options.START_OPTIONS);

        await UserModel.update({state: 1, editMessageIds: [message.message_id]}, { where: {chatId: chatId}});
        return await fillChannels(chatId, ChannelModel);
    } catch (e) {
        console.log('e startBot =',e);
    }
}

module.exports = {
    startBot
}