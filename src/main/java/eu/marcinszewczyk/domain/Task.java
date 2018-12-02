package eu.marcinszewczyk.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import eu.marcinszewczyk.domain.enumeration.Priority;

import eu.marcinszewczyk.domain.enumeration.TaskStatus;

/**
 * A Task.
 */
@Entity
@Table(name = "task")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Task implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "created")
    private ZonedDateTime created;

    @Column(name = "deadline_time")
    private ZonedDateTime deadlineTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "priority")
    private Priority priority;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TaskStatus status;

    @Column(name = "jhi_user")
    private Long user;

    @OneToMany(mappedBy = "task")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Comment> comments = new HashSet<>();
    @OneToMany(mappedBy = "task")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tag> tags = new HashSet<>();
    @ManyToOne
    @JsonIgnoreProperties("tasks")
    private Project project;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public Task description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ZonedDateTime getCreated() {
        return created;
    }

    public Task created(ZonedDateTime created) {
        this.created = created;
        return this;
    }

    public void setCreated(ZonedDateTime created) {
        this.created = created;
    }

    public ZonedDateTime getDeadlineTime() {
        return deadlineTime;
    }

    public Task deadlineTime(ZonedDateTime deadlineTime) {
        this.deadlineTime = deadlineTime;
        return this;
    }

    public void setDeadlineTime(ZonedDateTime deadlineTime) {
        this.deadlineTime = deadlineTime;
    }

    public Priority getPriority() {
        return priority;
    }

    public Task priority(Priority priority) {
        this.priority = priority;
        return this;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public Task status(TaskStatus status) {
        this.status = status;
        return this;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public Long getUser() {
        return user;
    }

    public Task user(Long user) {
        this.user = user;
        return this;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public Task comments(Set<Comment> comments) {
        this.comments = comments;
        return this;
    }

    public Task addComment(Comment comment) {
        this.comments.add(comment);
        comment.setTask(this);
        return this;
    }

    public Task removeComment(Comment comment) {
        this.comments.remove(comment);
        comment.setTask(null);
        return this;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public Task tags(Set<Tag> tags) {
        this.tags = tags;
        return this;
    }

    public Task addTag(Tag tag) {
        this.tags.add(tag);
        tag.setTask(this);
        return this;
    }

    public Task removeTag(Tag tag) {
        this.tags.remove(tag);
        tag.setTask(null);
        return this;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public Project getProject() {
        return project;
    }

    public Task project(Project project) {
        this.project = project;
        return this;
    }

    public void setProject(Project project) {
        this.project = project;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Task task = (Task) o;
        if (task.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), task.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Task{" +
            "id=" + getId() +
            ", description='" + getDescription() + "'" +
            ", created='" + getCreated() + "'" +
            ", deadlineTime='" + getDeadlineTime() + "'" +
            ", priority='" + getPriority() + "'" +
            ", status='" + getStatus() + "'" +
            ", user=" + getUser() +
            "}";
    }
}
