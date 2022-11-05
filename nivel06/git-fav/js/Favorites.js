import { GithubUser } from "./GithubUser.js";

// esturtura de dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find(
        (entry) => entry.login.toLowerCase() === username.toLowerCase()
      );

      if (userExists) {
        throw new Error("Pessoa já cadastrada");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error(
          `Não foi possível encontrar ${username || "uma pessoa sem nome"} :(`
        );
      }

      this.entries = [user, ...this.entries];

      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;

    this.update();
    this.save();
  }
}

// eventos e visualização do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onAdd();
  }

  toggleEmptyState() {
    if (this.entries.length > 0) {
      this.root.querySelector(".empty-state").classList.add("hide");
      return;
    }

    this.root.querySelector(".empty-state").classList.remove("hide");
  }

  onAdd() {
    const favButton = this.root.querySelector(".search button");

    favButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".user img").alt = `Imagem de ${user.name || "perfil"}`;

      row.querySelector(".user a").href = `https://github.com/${user.login}`;

      row.querySelector(".user p").textContent = user.name || "???";

      row.querySelector(".user span").textContent = `/${user.login}`;

      row.querySelector(".repositories").textContent = user.public_repos;

      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOK = confirm("Tem certeza que deseja remover esta pessoa?");
        if (isOK) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });

    this.toggleEmptyState();
    document.getElementById("query").value = ""
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    const rowContent = `
        <td class="user">
            <img
            src="https://github.com/FranzWarm.png"
            alt="Imagem de Perfil"
            />
            <a href="https://github.com/FranzWarm" target="_blank">
            <p>FranzWarm</p>
            <span>/franzwarm</span>
            </a>
        </td>
        <td class="repositories">
            4
        </td>
        <td class="followers">
            17
        </td>
        <td>
            <button class="remove">Remover</button>
        </td>
    `;

    tr.innerHTML = rowContent;

    return tr;
  }
}
