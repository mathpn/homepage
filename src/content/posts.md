---
layout: base.njk
title: Posts
description: My thoughts and articles
permalink: /posts/
pagination:
  data: collections.post
  size: 10
  reverse: true
---

# Posts

{% for post in pagination.items %}
  {% if post.data.title %}
    {# Long-form post with title #}
    <article class="post-preview">
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <time datetime="{{ post.date | htmlDateString }}">{{ post.date | formatDate }}</time>
      {% if post.data.description %}
        <p class="description">{{ post.data.description }}</p>
      {% endif %}
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </article>
  {% else %}
    {# Short-form post without title #}
    <article class="post-full">
      <time datetime="{{ post.date | htmlDateString }}">{{ post.date | formatDate }}</time>
      {{ post.templateContent | safe }}
      <a href="{{ post.url }}" class="permalink">Permalink →</a>
    </article>
  {% endif %}
{% endfor %}

{# Pagination navigation #}
<nav class="pagination">
  {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}" class="previous">← Previous</a>
  {% endif %}
  
  {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}" class="next">Next →</a>
  {% endif %}
</nav>

<style>
  .post-preview {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
  
  .post-full {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .description {
    color: #666;
    margin: 0.5rem 0;
  }
  
  .read-more,
  .permalink {
    display: inline-block;
    margin-top: 0.5rem;
    color: #0066cc;
    text-decoration: none;
  }
  
  .pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  
  .pagination a {
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
  }
  
  time {
    display: block;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
</style> 