// eslint-disable-next-line import/no-import-module-exports
import { Schema, model } from 'mongoose';

export interface Action {
	type: string;
}
export interface Comments {
	href: Action;
}
export interface Links {
	self: Comments;
	html: Comments;
	issue: Comments;
	comments: Comments;
	review_comments: Comments;
	review_comment: Comments;
	commits: Comments;
	statuses: Comments;
}
export interface Sender2 {
	login: Action;
	id: Action;
	node_id: Action;
	avatar_url: Action;
	gravatar_id: Action;
	url: Action;
	html_url: Action;
	followers_url: Action;
	following_url: Action;
	gists_url: Action;
	starred_url: Action;
	subscriptions_url: Action;
	organizations_url: Action;
	repos_url: Action;
	events_url: Action;
	received_events_url: Action;
	type: Action;
	site_admin: Action;
}
export interface Repo {
	id: Action;
	node_id: Action;
	name: Action;
	full_name: Action;
	private: Action;
	owner: Sender2;
	html_url: Action;
	description: Action;
	fork: Action;
	url: Action;
	forks_url: Action;
	keys_url: Action;
	collaborators_url: Action;
	teams_url: Action;
	hooks_url: Action;
	issue_events_url: Action;
	events_url: Action;
	assignees_url: Action;
	branches_url: Action;
	tags_url: Action;
	blobs_url: Action;
	git_tags_url: Action;
	git_refs_url: Action;
	trees_url: Action;
	statuses_url: Action;
	languages_url: Action;
	stargazers_url: Action;
	contributors_url: Action;
	subscribers_url: Action;
	subscription_url: Action;
	commits_url: Action;
	git_commits_url: Action;
	comments_url: Action;
	issue_comment_url: Action;
	contents_url: Action;
	compare_url: Action;
	merges_url: Action;
	archive_url: Action;
	downloads_url: Action;
	issues_url: Action;
	pulls_url: Action;
	milestones_url: Action;
	notifications_url: Action;
	labels_url: Action;
	releases_url: Action;
	deployments_url: Action;
	created_at: Action;
	updated_at: Action;
	pushed_at: Action;
	git_url: Action;
	ssh_url: Action;
	clone_url: Action;
	svn_url: Action;
	homepage: Action;
	size: Action;
	stargazers_count: Action;
	watchers_count: Action;
	language: Action;
	has_issues: Action;
	has_projects: Action;
	has_downloads: Action;
	has_wiki: Action;
	has_pages: Action;
	forks_count: Action;
	mirror_url: Action;
	archived: Action;
	disabled: Action;
	open_issues_count: Action;
	license: Action;
	allow_forking: Action;
	is_template: Action;
	topics: Action;
	visibility: Action;
	forks: Action;
	open_issues: Action;
	watchers: Action;
	default_branch: Action;
	allow_squash_merge: Action;
	allow_merge_commit: Action;
	allow_rebase_merge: Action;
	allow_auto_merge: Action;
	delete_branch_on_merge: Action;
	allow_update_branch: Action;
}
export interface Base2 {
	label: Action;
	ref: Action;
	sha: Action;
	user: Sender2;
	repo: Repo;
}
export interface PullRequest {
	url: Action;
	id: Action;
	node_id: Action;
	html_url: Action;
	diff_url: Action;
	patch_url: Action;
	issue_url: Action;
	number: Action;
	state: Action;
	locked: Action;
	title: Action;
	user: Sender2;
	body: Action;
	created_at: Action;
	updated_at: Action;
	closed_at: Action;
	merged_at: Action;
	merge_commit_sha: Action;
	assignee: Action;
	assignees: Action;
	requested_reviewers: Action;
	requested_teams: Action;
	labels: Action;
	milestone: Action;
	draft: Action;
	commits_url: Action;
	review_comments_url: Action;
	review_comment_url: Action;
	comments_url: Action;
	statuses_url: Action;
	head: Base2;
	base: Base2;
	_links: Links;
	author_association: Action;
	auto_merge: Action;
	active_lock_reason: Action;
	merged: Action;
	mergeable: Action;
	rebaseable: Action;
	mergeable_state: Action;
	merged_by: Action;
	comments: Action;
	review_comments: Action;
	maintainer_can_modify: Action;
	commits: Action;
	additions: Action;
	deletions: Action;
	changed_files: Action;
}

export interface Sender {
	login: Action;
	id: Action;
	node_id: Action;
	avatar_url: Action;
	gravatar_id: Action;
	url: Action;
	html_url: Action;
	followers_url: Action;
	following_url: Action;
	gists_url: Action;
	starred_url: Action;
	subscriptions_url: Action;
	organizations_url: Action;
	repos_url: Action;
	events_url: Action;
	received_events_url: Action;
	type: Action;
	site_admin: Action;
}
export interface Base {
	label: Action;
	ref: Action;
	sha: Action;
	user: Sender;
	repo: Repo;
}

export interface Repository {
	id: Action;
	node_id: Action;
	name: Action;
	full_name: Action;
	private: Action;
	owner: Sender;
	html_url: Action;
	description: Action;
	fork: Action;
	url: Action;
	forks_url: Action;
	keys_url: Action;
	collaborators_url: Action;
	teams_url: Action;
	hooks_url: Action;
	issue_events_url: Action;
	events_url: Action;
	assignees_url: Action;
	branches_url: Action;
	tags_url: Action;
	blobs_url: Action;
	git_tags_url: Action;
	git_refs_url: Action;
	trees_url: Action;
	statuses_url: Action;
	languages_url: Action;
	stargazers_url: Action;
	contributors_url: Action;
	subscribers_url: Action;
	subscription_url: Action;
	commits_url: Action;
	git_commits_url: Action;
	comments_url: Action;
	issue_comment_url: Action;
	contents_url: Action;
	compare_url: Action;
	merges_url: Action;
	archive_url: Action;
	downloads_url: Action;
	issues_url: Action;
	pulls_url: Action;
	milestones_url: Action;
	notifications_url: Action;
	labels_url: Action;
	releases_url: Action;
	deployments_url: Action;
	created_at: Action;
	updated_at: Action;
	pushed_at: Action;
	git_url: Action;
	ssh_url: Action;
	clone_url: Action;
	svn_url: Action;
	homepage: Action;
	size: Action;
	stargazers_count: Action;
	watchers_count: Action;
	language: Action;
	has_issues: Action;
	has_projects: Action;
	has_downloads: Action;
	has_wiki: Action;
	has_pages: Action;
	forks_count: Action;
	mirror_url: Action;
	archived: Action;
	disabled: Action;
	open_issues_count: Action;
	license: Action;
	allow_forking: Action;
	is_template: Action;
	topics: Action;
	visibility: Action;
	forks: Action;
	open_issues: Action;
	watchers: Action;
	default_branch: Action;
}
export interface GithubWebhook {
	action: Action;
	number: Action;
	pull_request: PullRequest;
	repository: Repository;
	sender: Sender;
}
const githubWebhookSchema = new Schema<any>(
	{
		action: {
			type: 'String',
		},
		number: {
			type: 'Number',
		},
		pull_request: {
			url: {
				type: 'Date',
			},
			id: {
				type: 'Number',
			},
			node_id: {
				type: 'String',
			},
			html_url: {
				type: 'Date',
			},
			diff_url: {
				type: 'String',
			},
			patch_url: {
				type: 'String',
			},
			issue_url: {
				type: 'Date',
			},
			number: {
				type: 'Number',
			},
			state: {
				type: 'String',
			},
			locked: {
				type: 'Boolean',
			},
			title: {
				type: 'String',
			},
			user: {
				login: {
					type: 'String',
				},
				id: {
					type: 'Number',
				},
				node_id: {
					type: 'String',
				},
				avatar_url: {
					type: 'String',
				},
				gravatar_id: {
					type: 'String',
				},
				url: {
					type: 'String',
				},
				html_url: {
					type: 'String',
				},
				followers_url: {
					type: 'String',
				},
				following_url: {
					type: 'String',
				},
				gists_url: {
					type: 'String',
				},
				starred_url: {
					type: 'String',
				},
				subscriptions_url: {
					type: 'String',
				},
				organizations_url: {
					type: 'String',
				},
				repos_url: {
					type: 'String',
				},
				events_url: {
					type: 'String',
				},
				received_events_url: {
					type: 'String',
				},
				type: {
					type: 'String',
				},
				site_admin: {
					type: 'Boolean',
				},
			},
			body: {
				type: 'String',
			},
			created_at: {
				type: 'Date',
			},
			updated_at: {
				type: 'Date',
			},
			closed_at: {
				type: 'Mixed',
			},
			merged_at: {
				type: 'Mixed',
			},
			merge_commit_sha: {
				type: 'Mixed',
			},
			assignee: {
				type: 'Mixed',
			},
			assignees: {
				type: 'Array',
			},
			requested_reviewers: {
				type: 'Array',
			},
			requested_teams: {
				type: 'Array',
			},
			labels: {
				type: 'Array',
			},
			milestone: {
				type: 'Mixed',
			},
			draft: {
				type: 'Boolean',
			},
			commits_url: {
				type: 'String',
			},
			review_comments_url: {
				type: 'String',
			},
			review_comment_url: {
				type: 'String',
			},
			comments_url: {
				type: 'String',
			},
			statuses_url: {
				type: 'String',
			},
			head: {
				label: {
					type: 'String',
				},
				ref: {
					type: 'String',
				},
				sha: {
					type: 'String',
				},
				user: {
					login: {
						type: 'String',
					},
					id: {
						type: 'Number',
					},
					node_id: {
						type: 'String',
					},
					avatar_url: {
						type: 'String',
					},
					gravatar_id: {
						type: 'String',
					},
					url: {
						type: 'String',
					},
					html_url: {
						type: 'String',
					},
					followers_url: {
						type: 'String',
					},
					following_url: {
						type: 'String',
					},
					gists_url: {
						type: 'String',
					},
					starred_url: {
						type: 'String',
					},
					subscriptions_url: {
						type: 'String',
					},
					organizations_url: {
						type: 'String',
					},
					repos_url: {
						type: 'String',
					},
					events_url: {
						type: 'String',
					},
					received_events_url: {
						type: 'String',
					},
					type: {
						type: 'String',
					},
					site_admin: {
						type: 'Boolean',
					},
				},
				repo: {
					id: {
						type: 'Number',
					},
					node_id: {
						type: 'String',
					},
					name: {
						type: 'String',
					},
					full_name: {
						type: 'String',
					},
					private: {
						type: 'Boolean',
					},
					owner: {
						login: {
							type: 'String',
						},
						id: {
							type: 'Number',
						},
						node_id: {
							type: 'String',
						},
						avatar_url: {
							type: 'String',
						},
						gravatar_id: {
							type: 'String',
						},
						url: {
							type: 'String',
						},
						html_url: {
							type: 'String',
						},
						followers_url: {
							type: 'String',
						},
						following_url: {
							type: 'String',
						},
						gists_url: {
							type: 'String',
						},
						starred_url: {
							type: 'String',
						},
						subscriptions_url: {
							type: 'String',
						},
						organizations_url: {
							type: 'String',
						},
						repos_url: {
							type: 'String',
						},
						events_url: {
							type: 'String',
						},
						received_events_url: {
							type: 'String',
						},
						type: {
							type: 'String',
						},
						site_admin: {
							type: 'Boolean',
						},
					},
					html_url: {
						type: 'String',
					},
					description: {
						type: 'Mixed',
					},
					fork: {
						type: 'Boolean',
					},
					url: {
						type: 'String',
					},
					forks_url: {
						type: 'String',
					},
					keys_url: {
						type: 'String',
					},
					collaborators_url: {
						type: 'String',
					},
					teams_url: {
						type: 'String',
					},
					hooks_url: {
						type: 'String',
					},
					issue_events_url: {
						type: 'String',
					},
					events_url: {
						type: 'String',
					},
					assignees_url: {
						type: 'String',
					},
					branches_url: {
						type: 'String',
					},
					tags_url: {
						type: 'String',
					},
					blobs_url: {
						type: 'String',
					},
					git_tags_url: {
						type: 'String',
					},
					git_refs_url: {
						type: 'String',
					},
					trees_url: {
						type: 'String',
					},
					statuses_url: {
						type: 'String',
					},
					languages_url: {
						type: 'String',
					},
					stargazers_url: {
						type: 'String',
					},
					contributors_url: {
						type: 'String',
					},
					subscribers_url: {
						type: 'String',
					},
					subscription_url: {
						type: 'String',
					},
					commits_url: {
						type: 'String',
					},
					git_commits_url: {
						type: 'String',
					},
					comments_url: {
						type: 'String',
					},
					issue_comment_url: {
						type: 'String',
					},
					contents_url: {
						type: 'String',
					},
					compare_url: {
						type: 'String',
					},
					merges_url: {
						type: 'String',
					},
					archive_url: {
						type: 'String',
					},
					downloads_url: {
						type: 'String',
					},
					issues_url: {
						type: 'String',
					},
					pulls_url: {
						type: 'String',
					},
					milestones_url: {
						type: 'String',
					},
					notifications_url: {
						type: 'String',
					},
					labels_url: {
						type: 'String',
					},
					releases_url: {
						type: 'String',
					},
					deployments_url: {
						type: 'String',
					},
					created_at: {
						type: 'Date',
					},
					updated_at: {
						type: 'Date',
					},
					pushed_at: {
						type: 'Date',
					},
					git_url: {
						type: 'String',
					},
					ssh_url: {
						type: 'String',
					},
					clone_url: {
						type: 'String',
					},
					svn_url: {
						type: 'String',
					},
					homepage: {
						type: 'Mixed',
					},
					size: {
						type: 'Number',
					},
					stargazers_count: {
						type: 'Number',
					},
					watchers_count: {
						type: 'Number',
					},
					language: {
						type: 'Mixed',
					},
					has_issues: {
						type: 'Boolean',
					},
					has_projects: {
						type: 'Boolean',
					},
					has_downloads: {
						type: 'Boolean',
					},
					has_wiki: {
						type: 'Boolean',
					},
					has_pages: {
						type: 'Boolean',
					},
					forks_count: {
						type: 'Number',
					},
					mirror_url: {
						type: 'Mixed',
					},
					archived: {
						type: 'Boolean',
					},
					disabled: {
						type: 'Boolean',
					},
					open_issues_count: {
						type: 'Number',
					},
					license: {
						type: 'Mixed',
					},
					allow_forking: {
						type: 'Boolean',
					},
					is_template: {
						type: 'Boolean',
					},
					topics: {
						type: 'Array',
					},
					visibility: {
						type: 'String',
					},
					forks: {
						type: 'Number',
					},
					open_issues: {
						type: 'Number',
					},
					watchers: {
						type: 'Number',
					},
					default_branch: {
						type: 'String',
					},
					allow_squash_merge: {
						type: 'Boolean',
					},
					allow_merge_commit: {
						type: 'Boolean',
					},
					allow_rebase_merge: {
						type: 'Boolean',
					},
					allow_auto_merge: {
						type: 'Boolean',
					},
					delete_branch_on_merge: {
						type: 'Boolean',
					},
					allow_update_branch: {
						type: 'Boolean',
					},
				},
			},
			base: {
				label: {
					type: 'String',
				},
				ref: {
					type: 'String',
				},
				sha: {
					type: 'String',
				},
				user: {
					login: {
						type: 'String',
					},
					id: {
						type: 'Number',
					},
					node_id: {
						type: 'String',
					},
					avatar_url: {
						type: 'String',
					},
					gravatar_id: {
						type: 'String',
					},
					url: {
						type: 'String',
					},
					html_url: {
						type: 'String',
					},
					followers_url: {
						type: 'String',
					},
					following_url: {
						type: 'String',
					},
					gists_url: {
						type: 'String',
					},
					starred_url: {
						type: 'String',
					},
					subscriptions_url: {
						type: 'String',
					},
					organizations_url: {
						type: 'String',
					},
					repos_url: {
						type: 'String',
					},
					events_url: {
						type: 'String',
					},
					received_events_url: {
						type: 'String',
					},
					type: {
						type: 'String',
					},
					site_admin: {
						type: 'Boolean',
					},
				},
				repo: {
					id: {
						type: 'Number',
					},
					node_id: {
						type: 'String',
					},
					name: {
						type: 'String',
					},
					full_name: {
						type: 'String',
					},
					private: {
						type: 'Boolean',
					},
					owner: {
						login: {
							type: 'String',
						},
						id: {
							type: 'Number',
						},
						node_id: {
							type: 'String',
						},
						avatar_url: {
							type: 'String',
						},
						gravatar_id: {
							type: 'String',
						},
						url: {
							type: 'String',
						},
						html_url: {
							type: 'String',
						},
						followers_url: {
							type: 'String',
						},
						following_url: {
							type: 'String',
						},
						gists_url: {
							type: 'String',
						},
						starred_url: {
							type: 'String',
						},
						subscriptions_url: {
							type: 'String',
						},
						organizations_url: {
							type: 'String',
						},
						repos_url: {
							type: 'String',
						},
						events_url: {
							type: 'String',
						},
						received_events_url: {
							type: 'String',
						},
						type: {
							type: 'String',
						},
						site_admin: {
							type: 'Boolean',
						},
					},
					html_url: {
						type: 'String',
					},
					description: {
						type: 'Mixed',
					},
					fork: {
						type: 'Boolean',
					},
					url: {
						type: 'String',
					},
					forks_url: {
						type: 'String',
					},
					keys_url: {
						type: 'String',
					},
					collaborators_url: {
						type: 'String',
					},
					teams_url: {
						type: 'String',
					},
					hooks_url: {
						type: 'String',
					},
					issue_events_url: {
						type: 'String',
					},
					events_url: {
						type: 'String',
					},
					assignees_url: {
						type: 'String',
					},
					branches_url: {
						type: 'String',
					},
					tags_url: {
						type: 'String',
					},
					blobs_url: {
						type: 'String',
					},
					git_tags_url: {
						type: 'String',
					},
					git_refs_url: {
						type: 'String',
					},
					trees_url: {
						type: 'String',
					},
					statuses_url: {
						type: 'String',
					},
					languages_url: {
						type: 'String',
					},
					stargazers_url: {
						type: 'String',
					},
					contributors_url: {
						type: 'String',
					},
					subscribers_url: {
						type: 'String',
					},
					subscription_url: {
						type: 'String',
					},
					commits_url: {
						type: 'String',
					},
					git_commits_url: {
						type: 'String',
					},
					comments_url: {
						type: 'String',
					},
					issue_comment_url: {
						type: 'String',
					},
					contents_url: {
						type: 'String',
					},
					compare_url: {
						type: 'String',
					},
					merges_url: {
						type: 'String',
					},
					archive_url: {
						type: 'String',
					},
					downloads_url: {
						type: 'String',
					},
					issues_url: {
						type: 'String',
					},
					pulls_url: {
						type: 'String',
					},
					milestones_url: {
						type: 'String',
					},
					notifications_url: {
						type: 'String',
					},
					labels_url: {
						type: 'String',
					},
					releases_url: {
						type: 'String',
					},
					deployments_url: {
						type: 'String',
					},
					created_at: {
						type: 'Date',
					},
					updated_at: {
						type: 'Date',
					},
					pushed_at: {
						type: 'Date',
					},
					git_url: {
						type: 'String',
					},
					ssh_url: {
						type: 'String',
					},
					clone_url: {
						type: 'String',
					},
					svn_url: {
						type: 'String',
					},
					homepage: {
						type: 'Mixed',
					},
					size: {
						type: 'Number',
					},
					stargazers_count: {
						type: 'Number',
					},
					watchers_count: {
						type: 'Number',
					},
					language: {
						type: 'Mixed',
					},
					has_issues: {
						type: 'Boolean',
					},
					has_projects: {
						type: 'Boolean',
					},
					has_downloads: {
						type: 'Boolean',
					},
					has_wiki: {
						type: 'Boolean',
					},
					has_pages: {
						type: 'Boolean',
					},
					forks_count: {
						type: 'Number',
					},
					mirror_url: {
						type: 'Mixed',
					},
					archived: {
						type: 'Boolean',
					},
					disabled: {
						type: 'Boolean',
					},
					open_issues_count: {
						type: 'Number',
					},
					license: {
						type: 'Mixed',
					},
					allow_forking: {
						type: 'Boolean',
					},
					is_template: {
						type: 'Boolean',
					},
					topics: {
						type: 'Array',
					},
					visibility: {
						type: 'String',
					},
					forks: {
						type: 'Number',
					},
					open_issues: {
						type: 'Number',
					},
					watchers: {
						type: 'Number',
					},
					default_branch: {
						type: 'String',
					},
					allow_squash_merge: {
						type: 'Boolean',
					},
					allow_merge_commit: {
						type: 'Boolean',
					},
					allow_rebase_merge: {
						type: 'Boolean',
					},
					allow_auto_merge: {
						type: 'Boolean',
					},
					delete_branch_on_merge: {
						type: 'Boolean',
					},
					allow_update_branch: {
						type: 'Boolean',
					},
				},
			},
			_links: {
				self: {
					href: {
						type: 'Date',
					},
				},
				html: {
					href: {
						type: 'Date',
					},
				},
				issue: {
					href: {
						type: 'Date',
					},
				},
				comments: {
					href: {
						type: 'String',
					},
				},
				review_comments: {
					href: {
						type: 'String',
					},
				},
				review_comment: {
					href: {
						type: 'String',
					},
				},
				commits: {
					href: {
						type: 'String',
					},
				},
				statuses: {
					href: {
						type: 'String',
					},
				},
			},
			author_association: {
				type: 'String',
			},
			auto_merge: {
				type: 'Mixed',
			},
			active_lock_reason: {
				type: 'Mixed',
			},
			merged: {
				type: 'Boolean',
			},
			mergeable: {
				type: 'Mixed',
			},
			rebaseable: {
				type: 'Mixed',
			},
			mergeable_state: {
				type: 'String',
			},
			merged_by: {
				type: 'Mixed',
			},
			comments: {
				type: 'Number',
			},
			review_comments: {
				type: 'Number',
			},
			maintainer_can_modify: {
				type: 'Boolean',
			},
			commits: {
				type: 'Number',
			},
			additions: {
				type: 'Number',
			},
			deletions: {
				type: 'Number',
			},
			changed_files: {
				type: 'Number',
			},
		},
		repository: {
			id: {
				type: 'Number',
			},
			node_id: {
				type: 'String',
			},
			name: {
				type: 'String',
			},
			full_name: {
				type: 'String',
			},
			private: {
				type: 'Boolean',
			},
			owner: {
				login: {
					type: 'String',
				},
				id: {
					type: 'Number',
				},
				node_id: {
					type: 'String',
				},
				avatar_url: {
					type: 'String',
				},
				gravatar_id: {
					type: 'String',
				},
				url: {
					type: 'String',
				},
				html_url: {
					type: 'String',
				},
				followers_url: {
					type: 'String',
				},
				following_url: {
					type: 'String',
				},
				gists_url: {
					type: 'String',
				},
				starred_url: {
					type: 'String',
				},
				subscriptions_url: {
					type: 'String',
				},
				organizations_url: {
					type: 'String',
				},
				repos_url: {
					type: 'String',
				},
				events_url: {
					type: 'String',
				},
				received_events_url: {
					type: 'String',
				},
				type: {
					type: 'String',
				},
				site_admin: {
					type: 'Boolean',
				},
			},
			html_url: {
				type: 'String',
			},
			description: {
				type: 'Mixed',
			},
			fork: {
				type: 'Boolean',
			},
			url: {
				type: 'String',
			},
			forks_url: {
				type: 'String',
			},
			keys_url: {
				type: 'String',
			},
			collaborators_url: {
				type: 'String',
			},
			teams_url: {
				type: 'String',
			},
			hooks_url: {
				type: 'String',
			},
			issue_events_url: {
				type: 'String',
			},
			events_url: {
				type: 'String',
			},
			assignees_url: {
				type: 'String',
			},
			branches_url: {
				type: 'String',
			},
			tags_url: {
				type: 'String',
			},
			blobs_url: {
				type: 'String',
			},
			git_tags_url: {
				type: 'String',
			},
			git_refs_url: {
				type: 'String',
			},
			trees_url: {
				type: 'String',
			},
			statuses_url: {
				type: 'String',
			},
			languages_url: {
				type: 'String',
			},
			stargazers_url: {
				type: 'String',
			},
			contributors_url: {
				type: 'String',
			},
			subscribers_url: {
				type: 'String',
			},
			subscription_url: {
				type: 'String',
			},
			commits_url: {
				type: 'String',
			},
			git_commits_url: {
				type: 'String',
			},
			comments_url: {
				type: 'String',
			},
			issue_comment_url: {
				type: 'String',
			},
			contents_url: {
				type: 'String',
			},
			compare_url: {
				type: 'String',
			},
			merges_url: {
				type: 'String',
			},
			archive_url: {
				type: 'String',
			},
			downloads_url: {
				type: 'String',
			},
			issues_url: {
				type: 'String',
			},
			pulls_url: {
				type: 'String',
			},
			milestones_url: {
				type: 'String',
			},
			notifications_url: {
				type: 'String',
			},
			labels_url: {
				type: 'String',
			},
			releases_url: {
				type: 'String',
			},
			deployments_url: {
				type: 'String',
			},
			created_at: {
				type: 'Date',
			},
			updated_at: {
				type: 'Date',
			},
			pushed_at: {
				type: 'Date',
			},
			git_url: {
				type: 'String',
			},
			ssh_url: {
				type: 'String',
			},
			clone_url: {
				type: 'String',
			},
			svn_url: {
				type: 'String',
			},
			homepage: {
				type: 'Mixed',
			},
			size: {
				type: 'Number',
			},
			stargazers_count: {
				type: 'Number',
			},
			watchers_count: {
				type: 'Number',
			},
			language: {
				type: 'Mixed',
			},
			has_issues: {
				type: 'Boolean',
			},
			has_projects: {
				type: 'Boolean',
			},
			has_downloads: {
				type: 'Boolean',
			},
			has_wiki: {
				type: 'Boolean',
			},
			has_pages: {
				type: 'Boolean',
			},
			forks_count: {
				type: 'Number',
			},
			mirror_url: {
				type: 'Mixed',
			},
			archived: {
				type: 'Boolean',
			},
			disabled: {
				type: 'Boolean',
			},
			open_issues_count: {
				type: 'Number',
			},
			license: {
				type: 'Mixed',
			},
			allow_forking: {
				type: 'Boolean',
			},
			is_template: {
				type: 'Boolean',
			},
			topics: {
				type: 'Array',
			},
			visibility: {
				type: 'String',
			},
			forks: {
				type: 'Number',
			},
			open_issues: {
				type: 'Number',
			},
			watchers: {
				type: 'Number',
			},
			default_branch: {
				type: 'String',
			},
		},
		sender: {
			login: {
				type: 'String',
			},
			id: {
				type: 'Number',
			},
			node_id: {
				type: 'String',
			},
			avatar_url: {
				type: 'String',
			},
			gravatar_id: {
				type: 'String',
			},
			url: {
				type: 'String',
			},
			html_url: {
				type: 'String',
			},
			followers_url: {
				type: 'String',
			},
			following_url: {
				type: 'String',
			},
			gists_url: {
				type: 'String',
			},
			starred_url: {
				type: 'String',
			},
			subscriptions_url: {
				type: 'String',
			},
			organizations_url: {
				type: 'String',
			},
			repos_url: {
				type: 'String',
			},
			events_url: {
				type: 'String',
			},
			received_events_url: {
				type: 'String',
			},
			type: {
				type: 'String',
			},
			site_admin: {
				type: 'Boolean',
			},
		},
	},
	{ collection: 'webhooks' }
);

module.exports = model<any>('webhooks', githubWebhookSchema);
