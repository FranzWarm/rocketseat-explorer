import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    const newLinkInput = document.getElementById("newLinkInput");

    if (newLink) {
      setLinks((prevState) => [...prevState, newLink]);
      setNewLink("");

      newLinkInput.value = "";
      newLinkInput.focus();
    }
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    const newTagInput = document.getElementById("newTagInput");

    if (newTag) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");

      newTagInput.value = "";
      newTagInput.focus();
    }
  }

  function handleRemoveTag(deleted) {
    console.log(tags);
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    console.log(tags);
    console.log("---");
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota antes de salvá-la.")
    }

    if(newTag) {
      return alert("Há uma Tag em processo de ser adicionada. \nClique no botão para adicioná-la ou deixe o campo vazio.");
    }

    if(newLink) {
      return alert("Há um Link em processo de ser adicionado. \nClique no botão para adicioná-lo ou deixe o campo vazio.");

    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso");
    handleBack();
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              id="newLinkInput"
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                id="newTagInput"
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}
