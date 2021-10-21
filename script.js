//soc:al media user's object
const linksSocialMedia = {
  github: 'estranholux',
  youtube: 'channel/UCkqAwnYJm5QcdKdHCajBQQw',
  instagram: 'estranholux',
  facebook: 'estranholux',
  twitter: 'estranholux'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
