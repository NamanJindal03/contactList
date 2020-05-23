module.exports.contactDirectory = (req,res) =>{
    const contacts = [
        {
            name: 'Naman',
            phone: 9953179989
        },
        {
            name: "Aakansha",
            phone: 9811637148
        }
    ]
    return res.render('temp', {
        contacts: contacts
    });
}  